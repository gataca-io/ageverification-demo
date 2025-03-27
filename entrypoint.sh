#!/bin/bash
envsubst '${SERVER_NAME},${IDP_HOST},${CLIENT_ID},${CLIENT_SECRET},${PRIMARY_AGE_SCOPE},${PRIMARY_AGE_SCOPE_DATAFIELD}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

FILE=$(ls /usr/share/nginx/html/static/js/main.*.js)
sed -i "s#%%CLIENT_ID%%#$CLIENT_ID#g" $FILE
sed -i "s#%%IDP_HOST%%#$IDP_HOST#g" $FILE
sed -i "s#%%SERVER_NAME%%#$SERVER_NAME#g" $FILE
sed -i "s#%%CLIENT_SECRET%%#$CLIENT_SECRET#g" $FILE
sed -i "s#%%SECONDARY_AGE_SCOPE%%#$SECONDARY_AGE_SCOPE#g" $FILE

exec nginx -g 'pid /var/run/nginx.pid;daemon off;'
