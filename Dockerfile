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
# docker run -itd -p 888:80 --rm --name front -v /Users/hk/dev/website-frontend/nginx/nginx.conf:/etc/nginx/nginx.conf frontimg:v1