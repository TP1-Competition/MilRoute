FROM node:18.16.1-alpine
WORKDIR /usr/src/app

# ENV PATH /user/src/app/node_modules/.bin:$PATH

COPY . . 
RUN npm install

# ENV CHOKIDAR_USEPOLLING=true

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]