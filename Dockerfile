FROM busybox

MAINTAINER Shawn Sit <xueqingxiao@gmail.com>

RUN mkdir -p /var/www/home
ADD dist /var/www/home
WORKDIR /var/www