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

FROM node:16

WORKDIR /usr/src/express

COPY app /usr/src/express

RUN yarn --immutable

ENV NODE_ENV=development

CMD ["node", "server.js"]
