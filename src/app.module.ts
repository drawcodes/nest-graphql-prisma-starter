import { Module } from '@nestjs/common';
import { GraphQLRootCModule } from './lib/graphql/GraphQLRootModule';
import { PrismaModule } from './lib/prisma/prisma.module';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [GraphQLRootCModule, PrismaModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
