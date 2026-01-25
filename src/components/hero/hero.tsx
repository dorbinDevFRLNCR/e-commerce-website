/*TODO Make Button component */

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
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-7xl h-auto mx-auto flex items-center justify-end min-h-full"
        >
          <div className="absolute top-1/4 right-4 lg:top-1/3 p-7 rounded-xl bg-[#FFF3E3] lg:p-11">
            <div>
              <p className="pb-4 text-base tracking-wider font-semibold">New Arrival</p>
              <h1 className="font-bold max-w-sm text-[#B88E2F] pb-4 text-3xl md:text-4xl lg:text-[52px]">
                Discover Our New Collection
              </h1>
              <p className="pb-12 max-w-xl text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis.
              </p>
              <Button className="uppercase py-2 px-9 lg:py-5 lg:px-18" variant="primary">
                Buy Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
