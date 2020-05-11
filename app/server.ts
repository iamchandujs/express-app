import 'reflect-metadata'
import Express from 'express'
import * as dotenv from 'dotenv'
import { connect } from 'mongoose'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

// resolvers
import { ProductResolver } from './resolvers/Product'
import { CategoryResolver } from './resolvers/Category'

dotenv.config()

const main = async (): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, ProductResolver],
    emitSchemaFile: true,
    validate: false
  })

  // create mongoose connection
  await connect(process.env.MONGO_URL ?? '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const server = new ApolloServer({ schema })
  const app = Express()
  server.applyMiddleware({ app: app as any })

  app.listen({ port: 8000 }, () => {
    const apiPath = `http://localhost:3333${server.graphqlPath}`
    console.log(`🚀 Server ready and listening at => ${apiPath}`)
  })
}
main().catch((error) => {
  console.log(error, 'error')
})
