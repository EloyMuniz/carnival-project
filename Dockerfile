FROM node:16-alpine 

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

RUN npx prisma generate

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]