VERSION=$(shell node -p "require('./package.json').version")
V=PATCH

install:
	yarn install

run:
	yarn start

build: install
	yarn build

snapshotX: build
	docker buildx build --platform linux/arm64/v8 -t gatacaid/legal-age-demo:$(VERSION)-SNAPSHOT . --push

releaseX: build
	docker buildx build --platform linux/amd64 -t gatacaid/legal-age-demo:$(VERSION) -t gatacaid/legalAgeDemo:$(VERSION)-SNAPSHOT . --push

deploy-dev:
	kubectl config use-context dev && kubectl apply -f deployment/deployment-dev.yml

deploy-pro:
	kubectl config use-context pro && kubectl apply -f deployment/deployment-pro.yml

refresh-dev:
	kubectl config use-context dev && kubectl scale --replicas 0 deployment/legalAgeDemo -n demos && kubectl scale --replicas 1 deployment/legalAgeDemo -n demos

## By default, the action will change PATCH +1 version. It can be choose MAYOR, MINOR or PATCH // Example change-version V=MINOR
change-version:
	gh workflow run demoland-update-tag.yml -r $(shell git branch --show-current) -F VersionReleaseChoice=$(V)

configure-test:
	sudo grep -qxF '127.0.0.1    test.dev.gataca.io' /etc/hosts || sudo sh -c "echo '127.0.0.1    test.dev.gataca.io' >> /etc/hosts"

run-test:
	(docker kill test || true) && (docker rm test || true )&& docker run --name test -p 443:443 gatacaid/nginx:test &
	open https://test.dev.gataca.io
