FROM node:lts-alpine
ENV NODE_ENV=production
RUN git clone https://github.com/angelsflyinhell/mathi.git
WORKDIR /usr/src/mathi
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/qwqshs
USER node
CMD ["npm", "start"]
