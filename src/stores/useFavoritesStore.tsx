import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoriteItem {
  id: number
  name: string
  price: number
  image: string
}

interface FavoritesState {
  favorites: FavoriteItem[]
  toggleFavorite: (product: FavoriteItem) => void
  isFavorite: (id: number) => boolean
  clearFavorites: () => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (product) => {
        set((state) => {
          if (state.favorites.some((item) => item.id === product.id)) {
            return {
              favorites: state.favorites.filter((item) => item.id !== product.id),
            }
          }

          return {
            favorites: [...state.favorites, product],
          }
        })
      },

      isFavorite: (id) => get().favorites.some((item) => item.id === id),

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'favorites-storage',
    }
  )
)
