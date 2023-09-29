import { Injectable } from '@nestjs/common';
import { CreateGraphQlSchemaFirstInput } from './dto/create-graph-ql-schema-first.input';
import { UpdateGraphQlSchemaFirstInput } from './dto/update-graph-ql-schema-first.input';

@Injectable()
export class GraphQlSchemaFirstService {
  create(createGraphQlSchemaFirstInput: CreateGraphQlSchemaFirstInput) {
    return 'This action adds a new graphQlSchemaFirst';
  }

  findAll() {
    return `This action returns all graphQlSchemaFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphQlSchemaFirst`;
  }

  update(id: number, updateGraphQlSchemaFirstInput: UpdateGraphQlSchemaFirstInput) {
    return `This action updates a #${id} graphQlSchemaFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphQlSchemaFirst`;
  }
}
