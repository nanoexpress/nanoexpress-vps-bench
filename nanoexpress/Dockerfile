#
# DEVELOPMENT
# Dockerfile
#

#
# In DEVELOPMENT mode we
# not use Multi-staging
# only in PRODUCTION
#
# We install the dependencies
# and required tools such as git, npm
#

FROM mhart/alpine-node:12

RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

WORKDIR /usr/src/nanoexpress

COPY app /usr/src/nanoexpress

RUN yarn --immutable

ENV NODE_ENV=development

CMD ["node", "server.js"]
