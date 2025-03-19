#!/bin/bash
envsubst '${SERVER_NAME},${IDP_HOST},${CLIENT_ID},${CLIENT_SECRET},}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

FILE=$(ls /usr/share/nginx/html/static/js/main.*.js)
sed -i "s#%%CLIENT_ID%%#$CLIENT_ID#g" $FILE
sed -i "s#%%IDP_HOST%%#$IDP_HOST#g" $FILE
sed -i "s#%%SERVER_NAME%%#$SERVER_NAME#g" $FILE
sed -i "s#%%CLIENT_SECRET%%#$CLIENT_SECRET#g" $FILE
sed -i "s#%%PRIMARY_AGE_SCOPE%%#$PRIMARY_AGE_SCOPE#g" $FILE
sed -i "s#%%SECONDARY_AGE_SCOPES%%#$SECONDARY_AGE_SCOPES#g" $FILE

exec nginx -g 'pid /var/run/nginx.pid;daemon off;'
