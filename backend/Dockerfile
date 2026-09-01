FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Prisma generate ke liye DATABASE_URL provide karo
ENV DATABASE_URL="mysql://root:123456789@mysql:3306/myappdb"

RUN npx prisma generate

RUN mkdir -p uploads

EXPOSE 5000

CMD ["npm", "start"]