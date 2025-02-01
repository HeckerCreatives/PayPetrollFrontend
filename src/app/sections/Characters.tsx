import React from 'react'

const dogs = [
   { img:'/assets/Dog3.png',name:'Rex'},
   { img:'/assets/Cat3.png',name:'Ash'},
   { img:'/assets/Bird3.png',name:'Chirpy'},
   { img:'/assets/Ham3.png',name:'Sugar'},
]
export default function Characters() {
  return (
    <div className=' w-full h-auto relative -translate-y-[150px] md:-translate-y-[300px]'>
        <img src='/assets/rip.png' className=' w-full'/>

        <div id='pets' className=' w-full bg-[#212121] h-auto relative z-50'>
         <section className="max-w-[1240px] flex flex-col gap-4 items-center mx-auto px-4 py-24  relative z-20">
        <h2 className="text-center text-3xl font-bold">Cute Pets</h2>
        <p className=" text-zinc-400 max-w-[700px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem commodi obcaecati earum assumenda aliquid error repellendus ipsam! Quisquam quidem sequi error</p>
        <div className=" flex flex-wrap justify-center gap-4">
          {dogs.map((i, index) => (

            <div  key={index} className=' group relative w-[280px] h-[350px] p-8'
            style={{backgroundImage: "url(/assets/card.png)", backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
            >

                <p className=' text-sm mt-4'>Meet</p>
                <h2 className=' text-2xl group-hover:text-orange-200 transition-colors duration-300 font-semibold text-orange-100'>{i.name}</h2>
                <p className=' text-xs text-zinc-100'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat minus consequuntur, vitae placeat vel nostrum, saepe totam amet repellendus iste fuga esse? Suscipit blanditiis.</p>
                <img  src={i.img} width={220} height={220} className=' group-hover:scale-110 transition-all duration-300 absolute bottom-0 right-0 translate-y-6'/>

            </div>
          ))}
        </div>
        {/* <div className="flex justify-center gap-4 mt-4">
          <button className="p-2 bg-white rounded-full shadow-md">
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md">
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div> */}
        </section>
        </div>
    </div>
   
   
  )
}
