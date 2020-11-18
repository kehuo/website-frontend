FROM node:13 as builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM nginx
RUN mkdir -p /data/app_static/home && \
    rm /etc/nginx/nginx.conf
COPY --from=builder /app/build /data/app_static/home

EXPOSE 80
VOLUME [ "/etc/nginx/nginx.conf" ]
CMD ["nginx", "-g", "daemon off;"]
# dev:
# docker run -itd -p 888:80 --rm --name front -v /Users/hk/dev/website-frontend/nginx/nginx.conf:/etc/nginx/nginx.conf frontimg:docusaurus

# prod:
# docker run -itd -p 80:80 --rm --name front -v /root/dev/website-frontend/nginx/nginx.conf:/etc/nginx/nginx.conf frontimg:docusaurus

# docker start nbviewer instance:
# docker run -itd -p 8080:8080 --rm --name nbviewer -e 'JUPYTERHUB_SERVICE_PREFIX=/nbviewer' -v /root/dev/website-binder/notebooks:/srv/nbviewer/notebooks:ro kehuo/nbviewer:latest