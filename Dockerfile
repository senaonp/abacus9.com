FROM nginx

EXPOSE 8001

WORKDIR /app

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /app
