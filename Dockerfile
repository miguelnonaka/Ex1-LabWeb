FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . /app/

EXPOSE 3067

CMD [ "node", "src/app.js" ]