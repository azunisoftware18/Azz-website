FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache curl wget

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
