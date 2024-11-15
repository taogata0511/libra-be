# Libra Frontend

## Setup

### Install Volta

```bash
curl https://get.volta.sh | bash
```
### Install Corepack

```bash
volta install corepack
```

### Enable pnpm

```bash
corepack enable
corepack enable pnpm
```

### Install Dependencies

```bash
pnpm i
```

## Launch Dev Server

```bash
pnpm docker:up
```

## Restart Dev Server
```bash
pnpm docker:restart
```

## API Docs
http://localhost:1000/api/docs/
