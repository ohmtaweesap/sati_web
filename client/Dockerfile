FROM node:22-bookworm

WORKDIR /app

COPY package*.json /.

RUN npm ci

COPY . .

RUN npm run build

CMD ["npx", "serve", "build"]
