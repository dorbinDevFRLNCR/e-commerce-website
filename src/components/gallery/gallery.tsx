import gallery from '../../assets/image/font.png'

function Gallery() {
  return (
    <section className="pb-16">
      <div>
        <div className="text-center">
          <p className="text-gray-500 font-semibold text-base md:text-xl">Share your setup with</p>
          <h3 className="text-gray-800 font-bold text-lg md:text-[40px]">#FuniroFurniture</h3>
        </div>
        <div>
          <img className="object-cover w-full h-auto" src={gallery} alt="our gallery" />
        </div>
      </div>
    </section>
  )
}

export default Gallery
