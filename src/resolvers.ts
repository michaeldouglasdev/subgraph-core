import { CartItemModel } from "./models";
import { calculateBestPrice, ProductService } from "./services";
import { Resolvers } from "./types";

const productService = new ProductService();

export const resolvers: Resolvers = {
  Query: {

  },
  Cart: {
    totalPrice: (parent) => {
      console.log('totalPrice', parent);
      const items = parent.items as CartItemModel[]

      const sum = items.reduce((acc , obj) => acc + (obj.product.price.value * obj.qty), 0);
      return {
        value: sum,
        label: `$${sum}`
      }
    }
  },

  CartItem: {
    totalPrice: ( parent ) => {
      const price  = parent.product.price.value;

      return {
        value: price * parent.qty,
        label: `$${price * parent.qty}`
      }
    }
  },
  Product: {
    bestPrice: ({ sku, offers, price}) => {
      const offersValues = offers.map(offer => offer.price.value);
      console.log('oofers', offers)
      console.log('proice', price);
      console.log('==')
      const offerMinValue = Math.min(...offersValues);

      const minValue = price.value < offerMinValue ? price.value : offerMinValue

      return {
        value: minValue,
        label: `$${minValue}`
      }
    }
  }
}