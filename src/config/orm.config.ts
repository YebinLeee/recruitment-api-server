import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCHRONIZE: true, // DB 자동 업데이트
    ENTITIES: [__dirname + '/../**/*.entity.{js,ts}'],
    MIGRATIONS: [__dirname + '/migrations/**/*.{.ts,.js}'],
    CLI: {
      migrationsDir: 'src/migrations',
    },
    MIGRATIONS_RUN: false,
    timezone: 'UTC',
  };
  const ormconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '0000',
    database: 'wanted',
    entities: commonConf.ENTITIES,
    synchronize: commonConf.SYNCHRONIZE,
    logging: true,
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
    migrationsTableName: 'migrations',
  };
  return ormconfig;
}

export { ormConfig };
