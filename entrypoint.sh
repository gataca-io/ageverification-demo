#!/bin/sh
envsubst '${IDP_HOST}, ${CLIENT_ID},${CLIENT_SECRET}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec nginx -g 'daemon off;'
