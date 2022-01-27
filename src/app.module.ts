import { Module } from '@nestjs/common';
import { GraphQLRootCModule } from './lib/graphql/GraphQLRootModule';
import { PrismaModule } from './lib/prisma/prisma.module';
import { UserModule } from './graphql/user/user.module';

@Module({
  imports: [GraphQLRootCModule, PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
