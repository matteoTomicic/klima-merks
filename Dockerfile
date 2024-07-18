FROM node:20-slim

WORKDIR /app

COPY ./ ./

RUN yarn
RUN yarn build

ENV NEXT_SHARP_PATH=/app/node_modules/sharp

CMD ["yarn", "start"]