FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY next.config.js  ./next.config.js
COPY .eslintrc.json ./.eslintrc.json
COPY .prettierrc ./.prettierrc
COPY tailwind.config.js  ./tailwind.config.js
COPY postcss.config.js  ./postcss.config.js
COPY .env ./.env


CMD ["npm", "run", "dev"]

