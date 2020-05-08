import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { Category, CategoryModel } from '../entities/category'
import { CategoryInput } from './types/category'

@Resolver()
export class CategoryResolver {
  @Query(_returns => Category, { nullable: false })
  async returnSingleCategory (@Arg('id') id: string): Promise<any> {
    return await CategoryModel.findById({ _id: id })
  };

  @Query(() => [Category])
  async returnAllCategory (): Promise<Category[]> {
    return await CategoryModel.find()
  };

  @Mutation(() => Category)
  async createCategory (@Arg('data') { name, description }: CategoryInput): Promise<Category> {
    const category = (await CategoryModel.create({
      name,
      description
    })).save()
    return await category
  };

  @Mutation(() => Boolean)
  async deleteCategory (@Arg('id') id: string): Promise<any> {
    await CategoryModel.deleteOne({ id })
    return true
  }
}
