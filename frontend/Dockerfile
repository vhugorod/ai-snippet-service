FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3030

CMD ["npm", "run", "start"]
