/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { env } from 'process';

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
    host: env.DB_HOST,
    port: 3306,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    entities: commonConf.ENTITIES,
    synchronize: commonConf.SYNCHRONIZE,
    logging: true,
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };

  return ormconfig;
}

export { ormConfig };
