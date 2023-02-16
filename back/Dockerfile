FROM node:14
WORKDIR /favorite-books/
COPY ./package.json /favorite-books/
RUN npm install

COPY . /favorite-books/
CMD npm run start