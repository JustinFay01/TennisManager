FROM node:alpine as development

WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:alpine as production
WORKDIR /app/frontend

COPY --from=development /app/frontend/dist /app/frontend/dist
EXPOSE 3000

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript
EXPOSE 3000
CMD ["npm", "run", "preview"]



