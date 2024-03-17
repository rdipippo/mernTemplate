FROM node:20

WORKDIR /app
ENV PGUSER=postgres
ENV PGHOST=db
ENV PGPASSWORD=postgres
ENV PGDATABASE=test
ENV PGPORT=5432
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]
