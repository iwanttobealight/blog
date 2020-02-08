FROM keymetrics/pm2:10-alpine as build

WORKDIR /app

ENV NODE_ENV="production"
ENV PATH="./node_modules/.bin:$PATH"

# Copy built application from previous container
COPY package.json .
COPY yarn.lock .

RUN yarn 

COPY . .

RUN yarn build

FROM nginx 

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
