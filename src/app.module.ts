import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql'
import { AppResolver } from "./app.resolver";
import { lexicographicSortSchema } from 'graphql'

const GQLModule = GraphQLModule.forRoot({
  playground: true,
  autoSchemaFile: 'schema.gql',

  /* Union types work fine without sorting */
  sortSchema: false,

  /* And they break when sorting applied */
  // sortSchema: true,

  /* The code below also breaks the union type */
  // transformSchema: lexicographicSortSchema,
})

@Module({
  imports: [GQLModule],
  providers: [AppResolver]
})
export class AppModule {}
