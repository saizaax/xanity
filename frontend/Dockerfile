FROM node:17 as BUILDER
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:latest
COPY --from=BUILDER /frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]