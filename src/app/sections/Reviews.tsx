import { PawPrint } from 'lucide-react'
import React from 'react'

export default function Reviews() {
  return (

    <div className=' w-full bg relative z-50'>
        <section className="max-w-[1240px] mx-auto px-4 py-20  relative z-20">
        <h2 className="text-center text-2xl font-bold mb-8">Recent Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2,3].map((i) => (
            <div
              key={i}
              className="bg-white shadow-lg flex flex-col transform hover:-translate-y-1 h-auto w-full transition-transform relative p-6"
            >

              {/* <p className=" absolute left-0 top-0 bg-red-600 px-4 py-2 text-xs">Lorem ipsum</p>

              <div className=" w-full h-full bg-gray-200">

              </div> */}

              <div className=" flex items-center gap-2">
                <div className=" w-12 aspect-square rounded-full bg-gray-200">

                </div>

                <div className=" flex flex-col">
                  <p className=" text-sm font-semibold text-black">Name</p>
                  <p className=" text-xs text-zinc-400">Lorem ipsum</p>

                </div>

              </div>

              <div className=" w-full flex flex-col items-start justify-center gap-2 p-4 text-xs">
                <p className=" text-sm text-zinc-400">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur id ab voluptates animi quae enim aperiam illo quos nemo blanditiis facilis, quasi veritatis!"</p>

              </div>

              <div className=" flex items-center gap-1 mt-4">
                <PawPrint size={20} className=" text-green-600"/>
                <PawPrint size={20} className=" text-green-600"/>
                <PawPrint size={20} className=" text-green-600"/>
                <PawPrint size={20} className=" text-green-600"/>
                <PawPrint size={20} className=" text-zinc-400"/>
                
              </div>

              <p className=" text-[.6rem] text-zinc-700 mt-2">4.1 ratings</p>
            </div>
          ))}
        </div>
       
        </section>
    </div>
       
  )
}
