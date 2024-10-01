import Link from "next/link";
import { Linkedin, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full border-t border-border px-4 flex flex-row justify-center items-center'>
      <div className='max-w-7xl py-16 mx-auto w-full flex flex-col gap-6 md:flex-row justify-between items-start md:items-center'>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='text-accent text-2xl font-bold pb-1'>BeFound</h2>
          <span className=" text-sm text-secondary font-normal max-w-lg">
            In today&apos;s digital age, managing your online presence isn&apos;t just a
            side task—it&apos;s a full-time job. Our full-time job, be found.
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
