import { CodegenConfig } from '@graphql-codegen/cli';

const codegen: CodegenConfig = {
  schema: './src/schema.graphql',
  generates: {
    './src/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        federation: true,
        useIndexSignature: true,
        contextType: './context#Context',
        mappers: {
          Product: './models#ProductModel',
          Price: './models#PriceModel',
          Cart: './models#CartModel',
          CartItem: './models#CartItemModel',
          Offer: './models#ProductOfferModel'
        }
      }
    }
  },
}

export default codegen;