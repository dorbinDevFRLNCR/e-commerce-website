import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  cart: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id)

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            }
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          }
        })
      },

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === id)

          if (existing && existing.quantity > 1) {
            return {
              cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              ),
            }
          }

          return {
            cart: state.cart.filter((item) => item.id !== id),
          }
        }),

      clearCart: () => set({ cart: [] }),

      getTotalItems: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),

      getTotalPrice: () => {
        const total = get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        return total
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
