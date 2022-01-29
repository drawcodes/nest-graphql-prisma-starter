import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
// import { GraphQLDateTime } from 'graphql-iso-date';

export const GraphQLRootCModule = GraphQLModule.forRoot({
  debug: false,
  playground: false,
  autoSchemaFile: join(process.cwd(), 'src/lib/graphql/schema.gql'),
  sortSchema: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],

  // resolvers: { DateTime: GraphQLDateTime },
});
