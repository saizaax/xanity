# Backend — Nest.js REST API

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Nest.js](https://img.shields.io/badge/Nest.js-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D.svg?logo=swagger&logoColor=black)](https://swagger.io/)

### Swagger API Documentation — `/api/docs`

### Run develop build

* Download [Node.js](https://nodejs.org/en/download/)

* Clone this repository
    ```bash
    git clone https://github.com/saizaax/xanity
    ```

* Open terminal and navigate to repository directory
    ```bash
    cd xanity/backend
    ```

* Install the packages required for the project
    ```bash
    npm i
    ```

* Start the project with npm
    ```bash
    npm run start
    ```

* Open Swagger Docs in web-browser
    ```bash
    http://localhost:5050/api/docs
    ```

<br>

### Build

* Open terminal and navigate to repository directory
    ```bash
    cd xanity/backend
    ```

* Make production build with npm
    ```bash
    npm run build
    ```

<br>

### Run in Docker container

* Download & Install [Docker / Docker Desktop](https://www.docker.com/products/docker-desktop)

* Open terminal and navigate to repository directory
    ```bash
    cd xanity/backend
    ```

* Build Docker image
    ```bash
    docker build -f Dockerfile -t xanity-backend .
    ```

* Run Docker container
    ```bash
    docker run -d -p 5050:5050 --name xanity-backend xanity-backend
    ```

* Open Swagger Docs in web-browser
    ```bash
    http://localhost:5050/api/docs
    ```
