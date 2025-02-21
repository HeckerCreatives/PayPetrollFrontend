import React from 'react'
const dogs = [
    {desc:'Catch the water droplet to clean your pet. Avoid touching the mud, as it will make your pet dirtier. ', img:'/screen3.jpg'},
    {desc:'Catch the ball to increase your pets intimacy. Avoid getting hit by the trash.', img:'/screen2.jpg'},
    {desc:'Catch pet food until your pet is full before the time runs out', img:'/screen1.jpg'},
]

export default function News() {
  return (
    <div id='news' className=' w-full bg-[#212121] h-auto relative z-50'>
     <section className="max-w-[1240px] flex flex-col gap-4 items-center mx-auto px-4 py-32  relative z-20">
    <h2 className="text-center text-3xl font-bold">How to play</h2>
    {/* <p className=" text-zinc-400 max-w-[700px] text-center">Welcome to the latest updates from Xtra Pays! We’re thrilled to share some exciting developments, new features, and important reminders to enhance your gaming experience. Stay tuned for what’s coming next!
    </p> */}
    <div className=" flex flex-wrap justify-center gap-4">
      {dogs.map((item, index) => (

        <div  key={index} className=' group relative flex flex-col items-center justify-center w-[390px] h-auto p-4'
       
        >
            <div className=' w-full flex items-center justify-center mt-4'>
              <img src={item.img} alt="screen" width={300} className=' w-full' />
            </div>
            <p className=' text-sm text-zinc-100 mt-4'>{item.desc}</p>

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
