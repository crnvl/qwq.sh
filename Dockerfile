FROM node:18-alpine

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY . .

RUN npm install --production --silent
RUN npm run build

ENTRYPOINT ["npx", "next", "start", "-p", "3005"]