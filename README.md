# NodeJS - REST API with NestJS Framework

## Description

Banking REST API with NestJS

## Nest cli installation

```bash
$ npm install -g @nestjs/cli
$ nest --version
$ nest --help
```

## Global npm packages installation

```bash
$ npm install -g ts-node typeorm
```

## Local npm packages installation

```bash
$ npm install --save @nestjs/typeorm
$ npm install --save typeorm
$ npm install --save mysql moment moment-timezone
```

## Creating the app

```bash
$ nest new banking-nest
```

## Environment variables

```
MYSQL_UPC_BANKING_NEST_URL=mysql://{user}:{password}@{host}:{port}/{database}
```

## Generating customers module

```bash
$ nest generate module customers
$ nest generate controller customers
$ nest generate service customers
```

## Generating accounts module

```bash
$ nest generate module accounts
$ nest generate controller accounts
$ nest generate service accounts
```

## Generating transactions module

```
$ nest generate module transactions
$ nest generate controller transactions
$ nest generate service transactions
```

## Database migrations

```
$ typeorm migration:generate -n InitialSchema -d src/app/infra/migrations
$ typeorm migration:create -n InsertCustomers -d src/app/infra/migrations
$ typeorm migration:create -n InsertAccounts -d src/app/infra/migrations
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
