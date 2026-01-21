import chair from '../../assets/image/chair.jpg'
import Sofa from '../../assets/image/sofa.jpg'
import barTable from '../../assets/image/bar-table.jpg'
import Lamp from '../../assets/image/lamp.jpg'
import Mug from '../../assets/image/mug.jpg'
import bedSet from '../../assets/image/bed-set.jpg'
import Pot from '../../assets/image/flower-pot.jpg'
import Button from '../button/button'
import { Heart } from 'akar-icons'
import { BsFillShareFill } from 'react-icons/bs'
import Compare from '../../assets/icons/compare.svg'
import { useCartStore } from '../../stores/useCartStore'
import { useFavoritesStore } from '../../stores/useFavoritesStore'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { motion } from 'framer-motion'

function OurProducts() {
  const products = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 42,
      discount: '-30%',
      oldPrice: 65,
      image: chair,
      new: false,
    },
    {
      id: 2,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 60,
      discount: '-50%',
      oldPrice: 120,
      image: Sofa,
      new: false,
    },
    {
      id: 3,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 20,
      discount: null,
      oldPrice: null,
      image: barTable,
      new: true,
    },
    {
      id: 4,
      name: 'Grifo',
      description: 'Night lamp',
      price: 40,
      discount: null,
      oldPrice: null,
      image: Lamp,
      new: false,
    },
    {
      id: 5,
      name: 'Muggo',
      description: 'Small mug',
      price: 15,
      discount: null,
      oldPrice: null,
      image: Mug,
      new: true,
    },
    {
      id: 6,
      name: 'Pingky',
      description: 'Cute bed set',
      price: 60,
      discount: '-50%',
      oldPrice: 120,
      image: bedSet,
      new: false,
    },
    {
      id: 7,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 55,
      discount: null,
      oldPrice: null,
      image: Pot,
      new: true,
    },
    {
      id: 8,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 55,
      discount: null,
      oldPrice: null,
      image: Pot,
      new: true,
    },
    {
      id: 9,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 42,
      discount: '-30%',
      oldPrice: 65,
      image: chair,
      new: false,
    },
    {
      id: 10,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 60,
      discount: '-50%',
      oldPrice: 120,
      image: Sofa,
      new: false,
    },
    {
      id: 11,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 20,
      discount: null,
      oldPrice: null,
      image: barTable,
      new: true,
    },
    {
      id: 12,
      name: 'Grifo',
      description: 'Night lamp',
      price: 40,
      discount: null,
      oldPrice: null,
      image: Lamp,
      new: false,
    },
    {
      id: 13,
      name: 'Muggo',
      description: 'Small mug',
      price: 15,
      discount: null,
      oldPrice: null,
      image: Mug,
      new: true,
    },
    {
      id: 14,
      name: 'Pingky',
      description: 'Cute bed set',
      price: 60,
      discount: '-50%',
      oldPrice: 120,
      image: bedSet,
      new: false,
    },
    {
      id: 15,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 55,
      discount: null,
      oldPrice: null,
      image: Pot,
      new: true,
    },
    {
      id: 16,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 55,
      discount: null,
      oldPrice: null,
      image: Pot,
      new: true,
    },
  ]

  const [activeProductId, setActiveProductId] = useState<number | null>(null)

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7,
      },
    },
  }

  const favorites = useFavoritesStore((state) => state.favorites)
  const isFavorite = (id: number) => favorites.some((item) => item.id === id)

  const INITIAL_VISIBLE_PRODUCTS = 8
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PRODUCTS)

  const formatPrice = (value: number) => `$${value.toFixed(2)}`

  return (
    <section className="pb-1 md:pb-8">
      <div>
        <h2 className="font-bold text-center text-2xl md:text-[40px]">Our Products</h2>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid pt-8 pb-8 px-4 gap-2 grid-cols-2 md:gap-10 md:grid-cols-3 lg:grid-cols-4"
      >
        {products.slice(0, visibleCount).map((product) => {
          const isActive = activeProductId === product.id

          return (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full max-w-2xs relative group"
              key={product.id}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setActiveProductId(isActive ? null : product.id)
                }
              }}
            >
              <div className="relative">
                <img
                  className="w-full h-auto object-cover"
                  src={product.image}
                  alt={product.name}
                />
                {(product.discount || product.new) && (
                  <span
                    className={`absolute top-4 right-4 flex items-center justify-center w-14 h-14 text-white font-medium text-sm rounded-full shadow-lg ${
                      product.discount ? 'bg-red-600' : 'bg-green-600'
                    } md:text-base`}
                  >
                    {product.discount || 'New'}
                  </span>
                )}
              </div>
              <div
                className={`absolute inset-0 bg-[rgba(0,0,0,0.4)] transition-opacity duration-300 flex flex-col justify-center items-center
                ${isActive ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
                md:group-hover:opacity-100 md:group-hover:visible md:group-hover:pointer-events-auto`}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setActiveProductId(null)
                  }
                }}
              >
                <Button
                  onClick={(el) => {
                    el.stopPropagation()
                    const store = useCartStore.getState()
                    const wasInCart = store.cart.some((item) => item.id === product.id)
                    useCartStore.getState().addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                    if (wasInCart) {
                      toast.success(`+1 к ${product.name} в корзине!`)
                    } else {
                      toast.success(`Добавлено в корзину: ${product.name}!`)
                    }
                  }}
                  className="py-3 px-6 outline-none text-sm font-semibold lg:px-16 md:text-base"
                  variant="secondary"
                >
                  Add to Cart
                </Button>
                <div className="flex flex-col gap-2 items-center pt-6 lg:flex-row lg:gap-5">
                  <button
                    onClick={(el) => {
                      el.stopPropagation()
                    }}
                    className="flex text-sm text-white items-center md:text-base"
                  >
                    <BsFillShareFill className="text-white mr-2" />
                    Share
                  </button>
                  <button
                    onClick={(el) => {
                      el.stopPropagation()
                    }}
                    className="flex text-sm text-white items-center gap-[2px] md:text-base"
                  >
                    <img src={Compare} alt="Compare" />
                    Compare
                  </button>
                  <button
                    onClick={(el) => {
                      el.stopPropagation()
                      const favStore = useFavoritesStore.getState()
                      const isAlreadyFav = favStore.isFavorite(product.id)
                      useFavoritesStore.getState().toggleFavorite({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                      if (isAlreadyFav) {
                        toast('Удалено из избранного', {
                          icon: '💔',
                          style: {
                            background: '#444',
                            color: '#fff',
                          },
                        })
                      } else {
                        toast.success(`Добавлено в избранное: ${product.name}!`, {
                          icon: '❤️',
                          duration: 2500,
                        })
                      }
                    }}
                    className="flex text-sm cursor-pointer text-white items-center gap-[2px] md:text-base"
                  >
                    <Heart
                      fill={isFavorite(product.id) ? 'white' : 'none'}
                      color="white"
                      size={16}
                    />
                    Like
                  </button>
                </div>
              </div>
              <div className="p-2 md:p-4">
                <div>
                  <h3 className="font-semibold pb-2 text-lg md:text-2xl">{product.name}</h3>
                  <p className="text-gray-600 text-sm font-medium md:text-base">
                    {product.description}
                  </p>
                </div>
                <div className="pt-2 flex gap-2 flex-row items-center md:gap-4">
                  <span className="font-semibold text-lg md:text-xl">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-600 text-sm line-through md:text-base">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      {products.length > visibleCount && (
        <Button
          onClick={() => setVisibleCount(products.length)}
          className="block py-3 mx-auto px-16"
          variant="secondary"
        >
          Show More
        </Button>
      )}
    </section>
  )
}

export default OurProducts
