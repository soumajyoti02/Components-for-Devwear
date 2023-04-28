import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '@/components/Carousel'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const slides = [
  "/banner1.jpg",
  "/banner5.jpg",
  "/banner8.jpg",

]
const slidesSm = [
  "/offer1.jpg",
  "/offer2.jpg",
  "/offer3.jpg",
  "/offer4.jpg",
  "/offer5.jpg",
]

const offerPicTshirt = [
  "/tshirt1.jpg",
  "/tshirt2.jpg",
  "/tshirt3.jpg",
  "/tshirt4.jpg",
]
const offerPicHood = [
  "/hood1.jpg",
  "/hood2.jpg",
]
const offerPicMug = [
  "/mug1.jpg",
  "/mug2.jpg",
]
const offerPicSticker = [
  "/s1.jpg",
  "/s2.jpg",
]

export default function Home() {
  return (
    <main className={`overflow-y-hidden`}>
      <div className="top-slider">

        <div className="lg:block hidden w-screen h-[70vh] ">
          <Carousel>
            {slides.map((s) => {
              return <img key={s} src={s} alt='image' className='w-screen h-[70vh]' />
            })}
          </Carousel>
        </div>
        <div className="lg:hidden block max-w-screen-2xl lg:h-[50vh] ">
          <Carousel>
            {slidesSm.map((s) => {
              return <Image key={s} src={s} alt='image' className='h-[50vh]' width={1300} height={200} />
            })}
          </Carousel>
        </div>
      </div>

      <div className="brand mt-5 bg-slate-100 w-screen">
        <div className="brand bg-slate-100 max-h-[40vh] flex flex-wrap justify-center md:justify-evenly items-center space-x-7 pt-8 md:pt-12 opacity-60">
          <div className="w-[29%] lg:w-[10%]  cursor-pointer flex justify-center items-center">
            <img src="./brand1.png" alt="" className=' w-[70%] md:w-full' />
          </div>
          <div className="w-[29%] lg:w-[10%] cursor-pointer flex justify-center items-center">
            <img src="./brand2.png" alt="" className='  w-[70%] md:w-full' />
          </div>
          <div className="w-[29%] lg:w-[10%] cursor-pointer flex justify-center items-center">
            <img src="./brand3.png" alt="" className=' w-[70%] md:w-full mr-7 md:mr-0' />
          </div>
          <div className="w-[29%] lg:w-[10%] cursor-pointer flex justify-center items-center">
            <img src="./brand4.png" alt="" className=' w-[70%] md:w-full mr-7 md:mr-0' />
          </div>
        </div>
      </div>

      <section className="offer_section h-full  bg-slate-50 w-screen mt-5">
        <div className="flex flex-col md:flex-row flex-wrap md:w-[90%] gap-5 justify-center md:justify-evenly items-center md:m-auto">
          <div className="flex w-[95%] md:w-[32%] justify-center items-center rounded-3xl overflow-hidden transition-all  lg:hover:-translate-y-3 cursor-pointer">
            <img src="/downoffer1.jpg" alt="" />
          </div>
          <div className="flex w-[95%] md:w-[32%] justify-center items-center rounded-3xl overflow-hidden transition-all  lg:hover:-translate-y-3 cursor-pointer">
            <img src="/downoffer2.jpg" alt="" />
          </div>
          <div className="flex w-[95%] md:w-[32%] justify-center items-center rounded-3xl overflow-hidden transition-all  lg:hover:-translate-y-3 cursor-pointer">
            <img src="/downoffer3.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="featured_products mt-5 bg-slate-100 flex justify-evenly items-center flex-wrap">
        <h1 className="text-2xl md:text-4xl font-bold font-sans mt-14">Featured Products</h1>
        <div className="w-screen flex justify-center items-center">
          <span className="w-[140px] md:w-[180px] h-[0.10rem] bg-blue-900 mt-4"></span>
        </div>
        <div className="flex justify-evenly items-center flex-wrap w-[93%] space-y-4 mt-6">
          {offerPicTshirt.map((pic) => {
            return <div key={pic} className="card mt-4">
              <div className="card-image overflow-hidden">
                <img src={`${pic}`} alt="" />
              </div>
              <div className="category"> T Shirt </div>
              <div className="heading"> Get noticed in this must-have Tshirt!
              </div>
            </div>
          })}
          {offerPicHood.map((pic) => {
            return <div key={pic} className="card mt-4">
              <div className="card-image overflow-hidden">
                <img src={`${pic}`} alt="" />
              </div>
              <div className="category"> Hoodies </div>
              <div className="heading"> Get noticed in this must-have Hoodie!
              </div>
            </div>
          })}
          {offerPicMug.map((pic) => {
            return <div key={pic} className="card mt-4">
              <div className="card-image overflow-hidden">
                <img src={`${pic}`} alt="" />
              </div>
              <div className="category"> Mug </div>
              <div className="heading"> Get noticed in this must-have Mug!
              </div>
            </div>
          })}
          {offerPicSticker.map((pic) => {
            return <div key={pic} className="card mt-4">
              <div className="card-image overflow-hidden ">
                <img src={`${pic}`} alt="" className='bg-cover' />
              </div>
              <div className="category"> Stickers </div>
              <div className="heading"> Get noticed in this must-have Sticker!
              </div>
            </div>
          })}

        </div>
      </section>

      <section className="down_Offer_Section w-screen bg-slate-100 mb-10">
        <div className="w-[90%] m-auto pt-10 ">
          <div className="md:hidden block rounded-3xl overflow-hidden">
            <img src="/downoffer5.jpg" alt="" className='h-[30vh]' />
          </div>
          <div className="md:block hidden rounded-3xl overflow-hidden">
            <img src="/b3.jpg" alt="" className='w-screen' />
          </div>
        </div>
      </section>

    </main>
  )
}
