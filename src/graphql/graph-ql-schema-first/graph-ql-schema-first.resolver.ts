import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GraphQlSchemaFirstService } from './graph-ql-schema-first.service';
import { CreateGraphQlSchemaFirstInput } from './dto/create-graph-ql-schema-first.input';
import { UpdateGraphQlSchemaFirstInput } from './dto/update-graph-ql-schema-first.input';

@Resolver('GraphQlSchemaFirst')
export class GraphQlSchemaFirstResolver {
  constructor(private readonly graphQlSchemaFirstService: GraphQlSchemaFirstService) {}

  @Mutation('createGraphQlSchemaFirst')
  create(@Args('createGraphQlSchemaFirstInput') createGraphQlSchemaFirstInput: CreateGraphQlSchemaFirstInput) {
    return this.graphQlSchemaFirstService.create(createGraphQlSchemaFirstInput);
  }

  @Query('graphQlSchemaFirst')
  findAll() {
    return this.graphQlSchemaFirstService.findAll();
  }

  @Query('graphQlSchemaFirst')
  findOne(@Args('id') id: number) {
    return this.graphQlSchemaFirstService.findOne(id);
  }

  @Mutation('updateGraphQlSchemaFirst')
  update(@Args('updateGraphQlSchemaFirstInput') updateGraphQlSchemaFirstInput: UpdateGraphQlSchemaFirstInput) {
    return this.graphQlSchemaFirstService.update(updateGraphQlSchemaFirstInput.id, updateGraphQlSchemaFirstInput);
  }

  @Mutation('removeGraphQlSchemaFirst')
  remove(@Args('id') id: number) {
    return this.graphQlSchemaFirstService.remove(id);
  }
}
