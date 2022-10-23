# Build
FROM node:16-alpine as build
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json ./
RUN npm i --silent

COPY . ./
RUN npm run build

# Serve
FROM nginx:alpine

COPY --from=build /frontend/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]