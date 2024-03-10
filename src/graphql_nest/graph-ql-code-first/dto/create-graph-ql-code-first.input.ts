import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphQlCodeFirstInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
