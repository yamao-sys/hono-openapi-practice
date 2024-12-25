FROM node:22-bookworm

WORKDIR /app

COPY ./app/package.json /app/package.json
COPY ./app/package-lock.json /app/package-lock.json

RUN npm install
RUN npm install -g wrangler

CMD sh -c "npm run dev"
