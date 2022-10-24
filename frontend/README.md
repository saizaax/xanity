# Frontend — React.js

[![ReactJS](https://img.shields.io/badge/React.js-282C34?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com/)

### Run develop build

* Download [Node.js](https://nodejs.org/en/download/)

* Clone this repository
    ```bash
    git clone https://github.com/saizaax/xanity
    ```

* Open terminal and navigate to repository directory
    ```bash
    cd xanity/frontend
    ```

* Install the packages required for the project
    ```bash
    npm i
    ```

* Start the project with npm
    ```bash
    npm run start
    ```

* Open in web-browser
    ```bash
    http://localhost:3000/
    ```

<br>

### Build

* Open terminal and navigate to repository directory
    ```bash
    cd xanity/frontend
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
    cd xanity/frontend
    ```

* Build Docker image
    ```bash
    docker build -f Dockerfile -t xanity-frontend .
    ```

* Run Docker container
    ```bash
    docker run -d -p 80:80 --name xanity-frontend xanity-frontend
    ```

* Open in web-browser
    ```bash
    http://localhost:80/
    ```
