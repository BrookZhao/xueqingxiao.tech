FROM busybox
RUN mkdir -p /var/www/home
ADD dist /var/www/home
WORKDIR /var/www