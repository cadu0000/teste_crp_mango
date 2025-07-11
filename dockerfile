FROM node:20-alpine
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  else npm install; fi

COPY . .

RUN if [ -f tsconfig.json ]; then npx tsc; fi

EXPOSE 3333

CMD ["node", "dist/server.js"]