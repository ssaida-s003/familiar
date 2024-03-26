FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/sites-enabled/default
COPY nginx/default.conf /etc/nginx/conf.d
WORKDIR /code
COPY ./dist/ dist/
#COPY ./dist /usr/share/nginx/html

EXPOSE 3000
STOPSIGNAL SIGTERM
CMD [ "nginx","-g","daemon off;" ]