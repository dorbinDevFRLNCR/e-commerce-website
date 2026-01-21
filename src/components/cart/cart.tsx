import { useCartStore } from '../../stores/useCartStore'
import { BsCartX } from 'react-icons/bs'
import { IoIosCloseCircle } from 'react-icons/io'
import Button from '../button/button'
import { useEffect } from 'react'

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
      <div className="absolute right-0 top-0 min-w-md bg-white rounded-md shadow-lg z-50 max-h-3xl overflow-hidden">
        <div className="flex justify-between items-center py-7 px-7 border-b border-gray-200">
          <h3 className="text-2xl font-semibold">Shopping Cart</h3>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-gray-700"
            aria-label="Close shopping cart"
          >
            <BsCartX />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
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
                      <p className="uppercase">{item.quantity}</p>
                      <p className="uppercase">x</p>
                      <p className="text-orange-400 font-medium">{item.price}</p>
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
              <div className="flex justify-between max-w-3xs items-center py-4 px-7">
                <p>Subtotal</p>
                <span className="text-orange-400 font-semibold">{formatPrice(totalPrice)}</span>
              </div>
            )}
            {cart.length > 0 && (
              <div className="flex justify-between items-center gap-4 py-4 px-7">
                {buttonsName.map((name) => (
                  <Button key={name} variant="cart" className="py-[6px] px-8">
                    {name}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
