import { CreateGraphQlCodeFirstInput } from './create-graph-ql-code-first.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphQlCodeFirstInput extends PartialType(CreateGraphQlCodeFirstInput) {
  @Field(() => Int)
  id: number;
}
