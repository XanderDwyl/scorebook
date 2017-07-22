FROM alpine:3.5

RUN apk add --update openssh-client git tar curl

ARG plugins=git

RUN apk add --update openssh-client git tar curl

RUN curl --silent --show-error --fail --location --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o - \
      "https://caddyserver.com/download/build?os=linux&arch=amd64&features=${plugins}" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy && \
    chmod 0755 /usr/bin/caddy && \
    addgroup -S caddy && \
    adduser -D -S -H -s /sbin/nologin -G caddy caddy && \
    /usr/bin/caddy -version



EXPOSE 2015


# Adjust time
RUN ntpd -d -q -n -p 2.north-america.pool.ntp.org

# TIMEZONE
RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata


RUN mkdir -p /srv

COPY ./Caddyfile /srv/Caddyfile
COPY ./build /srv/build

RUN chown -R caddy:caddy /srv

USER caddy

WORKDIR /srv


ENTRYPOINT ["/usr/bin/caddy"]
