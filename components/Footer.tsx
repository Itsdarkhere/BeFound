import Link from "next/link";
import { Linkedin, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full border-t border-border px-4 py-8 flex flex-row justify-center items-center'>
      <div className='max-w-7xl py-16 px-12 mx-auto w-full flex flex-row justify-between items-center'>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='text-accent text-2xl font-bold pb-1'>BeFound</h2>
          <span className=" text-sm text-secondary font-normal">
            In today&apos's digital age, managing your online presence isn&apos't just a<br/>
            side task—it&apos's a full-time job. Our full-time job, be found.
          </span>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col justify-center items-start gap-3">
                <Link className=" text-secondary text-sm font-normal" href="/work">Work</Link>
                <Link className=" text-secondary text-sm font-normal" href="/customers">Customers</Link>
                <Link className=" text-secondary text-sm font-normal" href="/company">Company</Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <Link href={"/linkedin"} className=" p-4 rounded-full shadow-md border border-borderTwo">
                    <Linkedin className=" w-4 h-4 text-secondary" />
                </Link>
                <Link href={"/linkedin"} className=" p-4 rounded-full shadow-md border border-borderTwo">
                    <X className=" w-4 h-4 text-secondary" />
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
