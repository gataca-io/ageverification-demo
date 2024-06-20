VERSION=$(shell node -p "require('./package.json').version")
V=PATCH

install:
	yarn install

run:
	yarn start

build: install
	yarn build

snapshotX-mac: build
	docker buildx build --platform linux/arm64/v8 -t gatacaid/legal-age-demo:$(VERSION)-SNAPSHOT . --push

snapshotX: build
	docker buildx build --platform linux/amd64 -t gatacaid/legal-age-demo:$(VERSION)-SNAPSHOT . --push

releaseX: build
	docker buildx build --platform linux/amd64 -t gatacaid/legal-age-demo:$(VERSION) -t gatacaid/legalAgeDemo:$(VERSION)-SNAPSHOT . --push

deploy-dev:
	kubectl config use-context dev && kubectl apply -f deployment/deployment-dev.yml

refresh-dev:
	kubectl config use-context dev && kubectl scale --replicas 0 deployment/legalAgeDemo -n demos && kubectl scale --replicas 1 deployment/legalAgeDemo -n demos

