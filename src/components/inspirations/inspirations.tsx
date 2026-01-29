import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Button from '../button/button'
import ImgOne from '../../assets/image/room-one.jpg'
import ImgTwo from '../../assets/image/room-two.jpg'
import ImgThree from '../../assets/image/room-three.jpg'
import { FaArrowRight } from 'react-icons/fa6'

function Inspirations() {
  const sliderContent = [
    {
      id: 1,
      img: ImgOne,
      number: '01',
      undertitle: '- Bed Room',
      title: 'Inner Peace',
    },
    {
      id: 2,
      img: ImgTwo,
      number: '02',
      undertitle: '- Bed Room',
      title: 'Inner Peace',
    },
    {
      id: 3,
      img: ImgThree,
      number: '03',
      undertitle: '- Bed Room',
      title: 'Inner Peace',
    },
  ]

  return (
    <section className="py-26 max-w-5xl mx-auto">
      <div className="container flex flex-col items-center mx-auto px-4 md:flex-row">
        <div className="mb-12 flex max-w-md flex-col gap-8">
          <div>
            <h2 className="text-4xl font-bold">50+ Beautiful rooms inspiration</h2>
            <p className="mt-3 text-lg text-gray-600">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
          </div>
          <Button className="font-semibold w-max py-3 px-9" variant="primary">
            Explore More
          </Button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="my-swiper w-full md:w-2/3"
        >
          {sliderContent.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="group relative overflow-hidden rounded-2xl">
                <div>
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="h-[582px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-gray-600">
                        {slide.number} {slide.undertitle}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold">{slide.title}</h3>
                    </div>
                    <Button
                      variant="primary"
                      className="rounded-full p-4 transition-transform group-hover:scale-110"
                    >
                      <FaArrowRight size={24} />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Inspirations
