import seo from "../public/seo.svg";
import development from "../public/development.svg";
import social from "../public/social.svg";
import Image from "next/image";

export default function Services() {
  return (
    <section className='w-full px-4 relative flex flex-row justify-center items-center'>
      <div className='max-w-7xl mx-auto py-16 gap-12 w-full flex flex-col justify-center items-center'>
        <h3 className=' text-4xl text-secondary font-bold'>
          Things we can help you with
        </h3>
        <div className='flex flex-col gap-8 w-full'>
          <div className=' rounded-3xl bg-primary max-w-3xl flex flex-col justify-center items-center md:flex-row gap-4 px-4 py-8 border border-borderTwo shadow-lg mr-auto'>
            <Image src={seo} alt='seo' height={250} />
            <div className='flex flex-col justify-start items-start'>
              <h6 className=' font-bold pb-2 text-secondary text-2xl'>
                SEO & Local SEO
              </h6>
              <p className=' font-normal leading-tight text-secondary text-lg'>
                Our expert team crafts tailored SEO and marketing strategies to
                boost your online presence and attract your ideal customers.
                Don&apos;t just exist online - be discovered, be remembered, BeFound.
              </p>
            </div>
          </div>
          <div className=' rounded-3xl bg-primary max-w-3xl flex flex-col justify-center items-center md:flex-row gap-4 px-4 py-8 border border-borderTwo shadow-lg ml-auto'>
            <Image src={development} alt='web & mobile development' height={250} />
            <div className='flex flex-col justify-start items-start'>
              <h6 className=' font-bold pb-2 text-secondary text-2xl'>
                Web & Mobile development
              </h6>
              <p className=' font-normal leading-tight text-secondary text-lg'>
                Our expert team crafts tailored SEO and marketing strategies to
                boost your online presence and attract your ideal customers.
                Don&apos;t just exist online - be discovered, be remembered, BeFound.
              </p>
            </div>
          </div>
          <div className=' rounded-3xl bg-primary max-w-3xl flex flex-col justify-center items-center md:flex-row gap-4 px-4 py-8 border border-borderTwo shadow-lg mr-auto'>
            <Image src={social} alt='social media management' height={250} />
            <div className='flex flex-col justify-start items-start'>
              <h6 className=' font-bold pb-2 text-secondary text-2xl'>
                Social media management
              </h6>
              <p className=' font-normal leading-tight text-secondary text-lg'>
                Our expert team crafts tailored SEO and marketing strategies to
                boost your online presence and attract your ideal customers.
                Don&apos;t just exist online - be discovered, be remembered, BeFound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
