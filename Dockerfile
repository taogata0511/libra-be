FROM node:22

RUN apt-get update -y && apt-get install -y openssl

# pnpm をインストール
RUN npm install -g pnpm

WORKDIR /app

# パッケージファイルをコピーして、依存関係をインストール
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# アプリケーションのコードをコピー
COPY . .

ENV PORT=4000

# ビルドを実行
RUN pnpm run build

CMD [ "pnpm", "start:dev" ]
