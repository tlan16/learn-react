# Stage 1: Build

FROM node:10.16.3-alpine AS builder

## Install OS dependencies
RUN apk --no-cache add \
    ca-certificates \
    build-base \
    autoconf \
    automake \
    zlib \
    bash \
    libltdl \
    libtool \
    zlib-dev \
    nasm
ENV ACLOCAL_PATH=/usr/share/aclocal
ENV LIBRARY_PATH=/lib:/usr/lib

WORKDIR /opt/app
COPY . .
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

# Stage 2: Hosting
FROM nginx:1.16.1-alpine

## Copy built files
WORKDIR /var/www
COPY --from=builder /opt/app/dist .

## Copy nginx config file
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

## Remove repositories to prevent tempering
RUN ["rm", "/etc/apk/repositories"]
