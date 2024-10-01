import Image from "next/image";
import email from "../public/email.svg"
export default function CTA() {
  return (
    <section className='w-full px-4 py-16 flex flex-row justify-center items-center'>
      <div className='max-w-7xl py-16 px-4 md:px-12 rounded-3xl bg-accent mx-auto w-full flex flex-col gap-6 md:flex-row justify-between items-center'>
        <div className="flex flex-col justify-start items-start max-w-xl">
            <h4 className=" font-semibold text-secondary pb-2 text-4xl">Leave your email<br/>& we will get back to you</h4>
            <p className=" font-normal text-secondary text-base pb-8">This alone commits you to nothing, we will email you and see if we can schedual a call to figure out if we can help!</p>
            <div className="flex flex-row shadow-md overflow-hidden rounded-xl">
                <input className=" py-2 px-4 outline-none text-primary min-w-64" type="email" placeholder="Your email" />
                <button className=" px-6 py-3 flex justify-center items-center bg-primary text-secondary font-semibold">Send</button>
            </div>
        </div>
        <Image src={email} height={200} alt="email notification" />
      </div>
    </section>
  );
}
