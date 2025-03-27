FROM openresty/openresty:alpine-fat

# install dependencies
RUN apk add --no-cache nginx-mod-http-lua git
RUN ["luarocks", "install", "lua-resty-session", "3.10"]
RUN ["luarocks", "install", "lua-resty-http"]
RUN ["luarocks", "install", "lua-resty-jwt"]

# install test dependencies
RUN ["luarocks", "install", "busted"]
RUN ["luarocks", "install", "LuaSocket"]
RUN ["luarocks", "install", "serpent"]
RUN ["luarocks", "install", "dkjson"]
RUN ["luarocks", "install", "luacov"]

COPY openidc.lua /usr/local/openresty/lualib/resty/openidc.lua

WORKDIR /

ENV DISABLE_SSL "NO"
ENV CLIENT_ID ""
ENV CLIENT_SECRET ""
ENV IDP_HOST ""
ENV SERVER_NAME ""
ENV PRIMARY_AGE_SCOPE ""
ENV PRIMARY_AGE_SCOPE_DATAFIELD "legalAge"
ENV SECONDARY_AGE_SCOPE=""

COPY /build /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY ./entrypoint.sh /entrypoint.sh

RUN chgrp -R 0 /etc/nginx && chmod -R g+rwX /etc/nginx
RUN chgrp -R 0 /var && chmod -R g+rwX /var
RUN touch /var/run/nginx.pid && \
    chgrp -R 0 /etc/nginx /var/log/nginx /var/run/nginx.pid /usr/share/nginx/html && \
    chmod -R g+rwX /etc/nginx /var/log/nginx /var/run/nginx.pid /usr/share/nginx/html
RUN chgrp -R 0 /usr/share/nginx/html && chmod -R g+rwX /usr/share/nginx/html

ENTRYPOINT [ "/entrypoint.sh" ]
CMD exec nginx -g 'pid /var/run/nginx.pid;daemon off;'
