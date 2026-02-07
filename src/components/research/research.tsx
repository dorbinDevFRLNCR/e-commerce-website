import { motion } from 'framer-motion'
import Dining from '../../assets/image/dining-room.jpg'
import Living from '../../assets/image/living-room.jpg'
import Bedroom from '../../assets/image/bedroom.jpg'

const Rooms = [
  {
    title: 'Dining',
    image: Dining,
  },
  {
    title: 'Living',
    image: Living,
  },
  {
    title: 'Bedroom',
    image: Bedroom,
  },
]

function Research() {
  return (
    <motion.div
      className="my-[48px] px-4 md:my-[100px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-5 flex-col justify-between md:flex-row">
        {Rooms.map((room) => (
          <div className="flex flex-col items-center gap-[30px]" key={room.title}>
            <img src={room.image} alt={room.title} />
            <p className="font-semibold text-base">{room.title}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Research
