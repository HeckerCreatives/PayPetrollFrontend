import React from 'react'
const dogs = [
    '/assets/dog1.png',
    '/assets/dog2.png',
    '/assets/dog3.png',
]

export default function News() {
  return (
    <div className=' w-full bg-[#212121] h-auto relative z-50'>
     <section className="max-w-[1240px] flex flex-col gap-4 items-center mx-auto px-4 py-32  relative z-20">
    <h2 className="text-center text-3xl font-bold">News & Announcements</h2>
    <p className=" text-zinc-400 max-w-[700px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem commodi obcaecati earum assumenda aliquid error repellendus ipsam! Quisquam quidem sequi error</p>
    <div className=" flex flex-wrap justify-center gap-4">
      {dogs.map((i) => (

        <div  key={i} className=' group relative flex flex-col w-[390px] h-[420px] p-12'
        style={{backgroundImage: "url(/assets/news.png)", backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
        >
            <div className=' w-full aspect-video bg-orange-100 mt-4'>

            </div>
            <h2 className=' mt-2 text-3xl group-hover:text-orange-200 transition-colors duration-300 font-semibold text-orange-100'>Lorem ipsum</h2>
            <p className=' text-sm text-zinc-100'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat minus consequuntur, vitae placeat vel nostrum, saepe totam amet repellendus iste fuga esse? Suscipit blanditiis.</p>

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
  )
}
