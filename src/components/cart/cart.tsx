import { useCartStore } from '../../stores/useCartStore'
import { BsCartX } from 'react-icons/bs'
import { IoIosCloseCircle } from 'react-icons/io'
import Button from '../button/button'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

type CartModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const cart = useCartStore((state) => state.cart)
  const totalPrice = useCartStore((state) => state.getTotalPrice())
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)

  const formatPrice = (value: number) => `$${value.toFixed(2)}`

  const buttonsName = ['Cart', 'Checkout', 'Comparison']

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full right-0 top-0 bg-white rounded-md shadow-lg z-50 max-h-3xl overflow-hidden md:max-w-lg lg:min-w-md"
      >
        <div className="flex justify-between items-center py-7 px-7 border-b border-gray-200">
          <h3 className="text-base font-semibold md:text-2xl">Shopping Cart</h3>
          <button
            onClick={onClose}
            className="text-base font-bold text-gray-500 hover:text-gray-700 md:text-2xl"
            aria-label="Close shopping cart"
          >
            <BsCartX />
          </button>
        </div>
        <div className="max-h-[80vh] overflow-y-auto sm:max-h-[60vh]">
          {cart.length === 0 ? (
            <p className="text-base text-gray-500 text-center py-8 md:text-3xl">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-3 px-7">
                <div className="flex items-center justify-between w-full gap-4">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[105px] h-[105px] rounded-md object-cover mb-2"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-base">{item.name}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="uppercase text-base">{item.quantity}</p>
                      <p className="uppercase text-base">x</p>
                      <p className="text-orange-400 font-medium text-base">{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Decrease-Quantity"
                  >
                    <IoIosCloseCircle size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
          <div className="sticky bottom-0 h-auto bg-white w-full">
            {cart.length > 0 && (
              <div className="flex justify-between max-w-3xs items-center py-4 px-7 text-base">
                <p>Subtotal</p>
                <span className="text-orange-400 font-semibold">{formatPrice(totalPrice)}</span>
              </div>
            )}
            {cart.length > 0 && (
              <div className="flex flex-col py-4 px-7 md:flex-row justify-between items-center gap-4">
                {buttonsName.map((name) => (
                  <Button
                    key={name}
                    variant="tertiary"
                    className="w-full text-base px-2 md:py-[6px] px-8"
                  >
                    {name}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
