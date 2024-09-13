FROM node:18-alpine AS base

WORKDIR /usr/app

COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./src/ ./src

RUN npm install
RUN npm run build
RUN npm list

EXPOSE 3000

#
# Development 
#
FROM base AS development

CMD ["npm", "run", "dev"]


#
# Production
#
FROM base AS production

RUN npm prune --omit=dev

CMD ["npm", "run", "start"]