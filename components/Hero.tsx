import { Info } from "lucide-react";
import Image from "next/image";
import hero from "../public/hero1.svg";
import m_hero from "../public/mhero.svg";
export default function Hero() {
  return (
    <section className='w-full px-4 relative flex flex-col md:flex-row justify-center items-center'>
      <div className='max-w-7xl mx-auto py-16 w-full flex flex-col md:flex-row gap-8 justify-between items-center'>
        <div className='flex flex-col justify-start items-start'>
          <div className='flex flex-row items-center mb-4 gap-2 bg-textTwo rounded-3xl py-2 px-4'>
            <Info className=' text-primary w-4 h-4' />
            <h6 className=' text-sm font-normal text-primary'>
              Free intro call for new clients!
            </h6>
          </div>
          <h1 className=' font-bold text-5xl leading-tight text-secondary pb-8'>
            Elevate Your Digital Visibility
            <br />
            Together with BeFound
          </h1>
          <h2 className=' text-textTwo max-w-xl text-lg leading-tight font-normal pb-12'>
            Our expert team crafts tailored SEO and marketing strategies to
            boost your online presence and attract your ideal customers.
            Don&apos;t just exist online - be discovered, be remembered,
            BeFound.
          </h2>
          <button className=' bg-accent min-w-64 focus-within:outline focus-within:outline-offset-4 focus-within:outline-orange-800 focus-within:outline-2 text-lg rounded-full py-4 font-semibold text-secondary'>
            Find out more
          </button>
        </div>
        <div className='flex justify-center items-center w-full md:hidden'>
          <Image priority src={m_hero} alt='logo illustration' />
        </div>
      </div>
      <div className=' hidden md:block absolute right-0 top-0 bottom-0'>
        <Image priority src={hero} alt='logo illustration' />
      </div>
    </section>
  );
}
