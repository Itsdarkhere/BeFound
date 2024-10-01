import { Menu } from 'lucide-react';
import Image from 'next/image';
import hero from "../public/hero.svg"
export default function Hero() {
  return (
    <section className='w-full px-4 relative flex flex-row justify-center items-center'>
      <div className='max-w-7xl mx-auto py-20 w-full flex flex-row justify-between items-center'>
        <div className='flex flex-col justify-start items-start'>
            <div className='flex flex-row items-center mb-4 gap-2 bg-textTwo rounded-3xl py-2 px-4'>
                <Menu className=' text-primary w-4 h-4' />
                <h6 className=' text-sm font-normal text-primary'>Free intro call for new clients!</h6>
            </div>
            <h1 className=' font-bold text-5xl leading-tight text-secondary pb-8'>Elevate Your Digital Visibility<br/>Together with BeFound</h1>
            <h2 className=' text-textTwo max-w-3xl text-lg font-medium pb-12'>Our expert team crafts tailored SEO and marketing strategies to boost your online presence and attract your ideal customers. Don&apos't just exist online - be discovered, be remembered, BeFound.</h2>
            <button className=' bg-accent min-w-64 text-lg rounded-full py-4 font-bold text-secondary'>
                Find out more
            </button>
        </div>
      </div>
      <div className=' absolute right-0 top-0 bottom-0'>
        <Image src={hero} alt='logo illustration' />
      </div>
    </section>
  );
}
