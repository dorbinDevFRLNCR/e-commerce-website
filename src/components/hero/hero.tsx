import HeroBackground from '../../assets/image/hero-back.png'
import Button from '../button/button'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="w-full"
    >
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[80vh] md:min-h-[70vh] lg:min-h-[60vh] xl:min-h-screen relative"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div className="relative max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-end min-h-[80vh] md:min-h-[70vh] lg:min-h-[60vh] xl:min-h-screen py-12"
          >
            <div className="w-full max-w-md lg:max-w-xl bg-[#FFF3E3] p-6 sm:p-8 lg:p-11 rounded-xl">
              <p className="pb-3 lg:pb-4 text-base tracking-wider font-semibold">New Arrival</p>
              <h1 className="font-bold text-[#B88E2F] pb-3 lg:pb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight">
                Discover Our New Collection
              </h1>
              <p className="pb-8 lg:pb-12 text-base lg:text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis.
              </p>
              <Button
                className="uppercase py-3 px-8 lg:py-5 lg:px-16 text-sm lg:text-base"
                variant="primary"
              >
                Buy Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
