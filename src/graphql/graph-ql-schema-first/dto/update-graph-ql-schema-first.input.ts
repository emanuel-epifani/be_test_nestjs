import { CreateGraphQlSchemaFirstInput } from './create-graph-ql-schema-first.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGraphQlSchemaFirstInput extends PartialType(CreateGraphQlSchemaFirstInput) {
  id: number;
}
