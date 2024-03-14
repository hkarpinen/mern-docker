FROM node:latest as base
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]


FROM base as production
RUN npm run build
CMD ["node", "build/index.js"]