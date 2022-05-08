# BUILD
FROM node:17 as BUILDER
WORKDIR /usr/src/backend

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# RUN
FROM node:17 as PRODUCTION
WORKDIR /usr/src/backend

COPY package*.json ./
RUN npm install --only=production
COPY . .

COPY --from=BUILDER /usr/src/backend/dist ./dist
CMD ["node", "dist/main"]