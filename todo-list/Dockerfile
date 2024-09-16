FROM node:22 AS base

WORKDIR /usr/app

COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./src ./src
COPY ./test ./test

RUN yarn install
RUN yarn run build
RUN yarn list

EXPOSE 3000

#
# Development 
#
FROM base AS development

CMD ["yarn", "run", "dev"]


#
# Production
#
FROM base AS production

RUN npm prune --omit=dev

CMD ["yarn", "run", "start"]