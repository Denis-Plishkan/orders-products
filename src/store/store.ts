import { createStore } from "vuex";
import { getOrders, getProducts } from "@/api";
import type { Order, Product, Data } from "@/type/type";

const store = createStore<Data>({
  state: (): Data => ({
    orders: [],
    products: [],
  }),
  getters: {
    orders: (state: Data) => state.orders,
  },
  mutations: {
    SET_ORDERS: (state: Data, orders: Order[]) => {
      state.orders = orders;
    },
    SET_PRODUCTS: (state: Data, products: Product[]) => {
      state.products = products;
    },
  },
  actions: {
    async fetchOrders({ commit }: ActionContext<Data, Data>) {
      try {
        const orders: Order[] = await getOrders();
        commit("SET_ORDERS", orders);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProducts({ commit }: ActionContext<Data, Data>) {
      try {
        const products: Product[] = await getProducts();
        commit("SET_PRODUCTS", products);
      } catch (error) {
        console.error(error);
      }
    }
  }
})

export default store;
