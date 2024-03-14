FROM node:latest as base
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]

FROM base as builder
RUN npm run build

FROM httpd:2.4 as production
WORKDIR /usr/local/apache2/htdocs/
RUN rm -rf ./*
COPY --from=builder /srv/app/build .
EXPOSE 80