import Icon from '@mdi/react'
import { mdiAccountAlertOutline } from '@mdi/js'
import { Search, Heart } from 'akar-icons'
import { ShoppingCartOutlined } from '@ant-design/icons'
import HeaderLogo from '../../assets/image/h-logo.png'
import { useState } from 'react'
import { useCartStore } from '../../stores/useCartStore'
import { useFavoritesStore } from '../../stores/useFavoritesStore'
import { CartModal } from '../cart/cart'
import { motion, type Variants } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'

function Header() {
  const cartItemsCount = useCartStore((state) => state.getTotalItems())
  const favoritesCount = useFavoritesStore((state) => state.favorites.length)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
  }

  const listVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
  }

  return (
    <header className="sticky pt-4 pb-2 shadow-lg top-0 z-50 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-sm px-4 mx-auto flex justify-between items-center md:max-w-7xl"
      >
        <motion.div variants={itemVariants}>
          <img className="h-8 md:h-12 w-auto block" src={HeaderLogo} alt="Header Logo" />
        </motion.div>

        <motion.nav variants={sectionVariants}>
          <motion.ul
            variants={listVariants}
            className="hidden lg:flex items-center space-x-12 lg:space-x-16 text-base font-medium"
          >
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <motion.li key={item} variants={itemVariants}>
                <a
                  href="/"
                  className="text-gray-800 hover:text-amber-600 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>

        <motion.div
          variants={sectionVariants}
          className="flex gap-2 text-[28px] items-center lg:gap-[45px]"
        >
          <button
            aria-label="Account-Alert"
            className="hidden lg:block text-black-700 hover:text-amber-600 transition-colors duration-200"
          >
            <Icon path={mdiAccountAlertOutline} size={1.1} />
          </button>

          <button
            aria-label="Search"
            className="text-black-700 hover:text-amber-600 transition-colors duration-200"
          >
            <Search size={28} />
          </button>

          <button className="hidden lg:block text-black-700 hover:text-amber-600 transition-colors duration-200 relative">
            <Heart size={28} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                {favoritesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-black-700 hover:text-amber-600 transition-colors duration-200 relative"
          >
            <ShoppingCartOutlined size={28} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                {cartItemsCount}
              </span>
            )}
          </button>

          <button
            aria-label="Open-menu"
            onClick={() => {
              setIsOptionsOpen(!isOptionsOpen)
            }}
            className="text-black-700 hover:text-amber-600 transition-colors duration-200 lg:hidden"
          >
            <FiMenu size={28} />
          </button>

          {isOptionsOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className=""
            >
              <div>
                <motion.nav variants={sectionVariants}>
                  <motion.ul
                    variants={listVariants}
                    className="hidden lg:flex items-center space-x-12 lg:space-x-16 text-base font-medium"
                  >
                    {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                      <motion.li key={item} variants={itemVariants}>
                        <a
                          href="/"
                          className="text-gray-800 hover:text-amber-600 transition-colors duration-200 relative group"
                        >
                          {item}
                          <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.nav>
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {isMenuOpen && <CartModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Header
