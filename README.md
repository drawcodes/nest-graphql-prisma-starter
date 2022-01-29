[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url]

[ci-image]: https://github.com/standard/eslint-config-standard/actions/workflows/ci.yml/badge.svg?branch=master
[ci-url]: https://github.com/standard/eslint-config-standard/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard
[downloads-url]: https://npmjs.org/package/eslint-config-standard

## Description

[Nest](https://github.com/nestjs/nest), [Prisma](https://docs.nestjs.com/recipes/prisma), [Graphql Code First](https://docs.nestjs.com/graphql/quick-start#code-first) NestJS framework TypeScript starter repository.

## Features

- [Airbnb Eslint](https://github.com/airbnb/javascript)
- [Primsa ORM](https://www.prisma.io/)
- [Husky](https://typicode.github.io/husky)
- [Commitlint](https://commitlint.js.org)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Semantic Release](https://github.com/semantic-release/semantic-release#readme)
- Conventional Commits

## Initial Setup

```bash
$ npm install
```

## Database Setup

```
- Create .env and copy contents from .env.example
- Change DATABASE_URL in .env
- Change provder in prisma/schema.prisma
```

## Prisma Scripts

```bash
# Generate Migration
$ npm run prisma:generate

# Create Migration
$ npm run migrate:dev

# Run Prisma Studio
npx prisma studio

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
