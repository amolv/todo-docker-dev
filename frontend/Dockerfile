FROM node:16-alpine as base
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]

FROM base as test
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci
COPY . .
CMD ["npm", "run", "test"]