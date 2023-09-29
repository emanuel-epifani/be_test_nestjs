import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GraphQlCodeFirst {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
