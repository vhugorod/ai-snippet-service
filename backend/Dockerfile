FROM node:20

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3001
CMD ["node", "dist/index.js"]
