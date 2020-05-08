import { Resolver, Mutation, Arg, Query, FieldResolver, Root } from 'type-graphql'
import { Product, ProductModel } from '../entities/Product'
import { ProductInput } from './types/product'
import { Category, CategoryModel } from '../entities/category'

@Resolver(_of => Product)
export class ProductResolver {
  @Query(_returns => Product, { nullable: false })
  async returnSingleProduct (@Arg('id') id: string): Promise<any> {
    return await ProductModel.findById({ _id: id })
  };

  @Query(() => [Product])
  async returnAllProduct (): Promise<Product[]> {
    return await ProductModel.find()
  };

  @Mutation(() => Product)
  async createProduct (@Arg('data') { name, description, color, stock, price, categoryId }: ProductInput): Promise<Product> {
    const product = (await ProductModel.create({
      name,
      description,
      color,
      stock,
      price,
      category_id: categoryId
    })).save()
    return await product
  };

  @Mutation(() => Boolean)
  async deleteProduct (@Arg('id') id: string): Promise<any> {
    await ProductModel.deleteOne({ id })
    return true
  }

  @FieldResolver(_type => (Category))
  async category (@Root() product: Product): Promise<Category> {
    const category: any = await CategoryModel.findById(product._doc.category_id)
    return category
  }
}
