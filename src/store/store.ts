import { createStore } from 'vuex'
import type { Store } from 'vuex/types/index.js'
import { getOrders, getProducts } from '@/api'
import type { Order, Product, Data } from '@/type/type'

const store: Store<Data> = createStore<Data>({
  state: (): Data => ({
    orders: [],
    products: [],
  }),
  getters: {
    orders: (state: Data): Order[] => state.orders,
    products: (state: Data): Product[] => state.products,
  },
  mutations: {
    SET_ORDERS: (state: Data, orders: Order[]): void => {
      state.orders = orders
    },
    SET_PRODUCTS: (state: Data, products: Product[]): void => {
      state.products = products
    },
    DELETE_ORDER: (state: Data, orderId: number): void => {
      state.orders = state.orders.filter((order) => order.id !== orderId)
    },
    DELETE_PRODUCT: (state: Data, productId: number): void => {
      state.products = state.products.filter((product) => product.id !== productId)
      state.orders.forEach((order) => {
        order.products = order.products.filter((product) => product.id !== productId)
      })
    },
  },
  actions: {
    async fetchOrders({ commit }: Store<Data>): Promise<void> {
      try {
        const orders: Order[] = await getOrders()
        commit('SET_ORDERS', orders)
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    },
    async fetchProducts({ commit }: Store<Data>): Promise<void> {
      try {
        const products: Product[] = await getProducts()
        commit('SET_PRODUCTS', products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    deleteOrder({ commit }: Store<Data>, orderId: number): void {
      commit('DELETE_ORDER', orderId)
    },
    deleteProduct({ commit }: Store<Data>, productId: number): void {
      commit('DELETE_PRODUCT', productId)
    },
  },
})

export default store
