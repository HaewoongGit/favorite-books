FROM node:14
WORKDIR /myfolder/
COPY ./package.json /myfolder/
RUN npm install

COPY . /myfolder/

CMD npm run dev