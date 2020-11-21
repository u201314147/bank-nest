module.exports = {
  type: 'mysql',
  url: 'mysql://root:mysql@0.tcp.ngrok.io:13370/examen',
  migrations: ['app/infra/migrations/*.js'],
  cli: {
    migrationsDir: './app/infra/migrations',
  },
  migrationsRun: true,
  logging: true,
  timezone: '+0',
  entities: ['**/command/infra/persistence/typeorm/entities/**.typeorm.js'],
};
