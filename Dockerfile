FROM node:22.11.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3030 5000 3001

CMD ["sh", "-c", "npm run server & npm run websocket & npm run dev -- --host 0.0.0.0 --port 3030"]
