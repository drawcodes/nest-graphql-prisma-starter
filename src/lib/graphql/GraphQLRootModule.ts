import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

export const GraphQLRootCModule = GraphQLModule.forRoot({
  debug: false,
  playground: false,
  autoSchemaFile: join(process.cwd(), 'src/lib/graphql/schema.gql'),
  sortSchema: true,
});
