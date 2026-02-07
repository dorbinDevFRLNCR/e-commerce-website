import Logo from '../../assets/image/footer-logo.png'

function Footer() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <img src={Logo} alt="Footer Logo" className="object-contain h-10 w-[85px]" />
          <p className="text-gray-600 text-sm">&copy; 2024 Funiro. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="pb-[28px]">Links</p>
            <ul className="flex flex-col gap-2 pb-[48px]">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item} className="text-gray-600 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="pb-[28px]">Help</p>
            <ul className="flex flex-col gap-2 pb-[48px]">
              {['Payment Options', 'Shipping & Delivery', 'Returns & Exchanges', 'FAQs'].map(
                (item) => (
                  <li key={item} className="text-gray-600 text-sm">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <p className="pb-[28px]">Newsletter</p>
            <form className="flex gap-2 pb-[48px] max-w-2xs">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="text-gray-600 text-sm text-center">
            &copy; 2024 Funiro. All rights reserved. Designed by Funiro Team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
