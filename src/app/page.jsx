import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bg-image.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Enhance your Law at {process.env.APP_NAME}</h1>
          <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
          <Link href='/login'>
            <button className='py-4 px-6 bg-neutral-200 text-neutral-800 hover:bg-neutral-300 rounded-lg'>Get Started</button>
          </Link>
        </div>
      </div>

      {/* <div className="container mx-auto mt-16">
        <div className="grid grid-cols-12 gap-3 md:gap-6">
          <div class="col-span-6 md:col-span-4 relative flex flex-col overflow-hidden rounded-2xl px-8 pb-8 pt-40">
            <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris !</h3>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
          </div>



        </div>

      </div> */}

    </div>
  );
}
