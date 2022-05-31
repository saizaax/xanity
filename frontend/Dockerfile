FROM node:17 as BUILDER
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build
RUN npm i -g serve

EXPOSE 3000
CMD ["serve", "build", "-p", "3000"]