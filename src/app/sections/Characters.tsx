'use client'
import React, { useState } from 'react'
import { petimg, pets } from '../data'

const dogs = [
   { img:'/assets/Dog3.png',name:'Rex'},
   { img:'/assets/Cat3.png',name:'Ash'},
   { img:'/assets/Bird3.png',name:'Chirpy'},
   { img:'/assets/Ham3.png',name:'Sugar'},
]
export default function Characters() {
  const [tab, setTab] = useState('Novice')

  const findPets = pets.find((item) => item.rank === tab)

  const findimg = (data: string) => {
    const img = petimg.find((item) => item.id === data)?.img

    return img
  }
  

  console.log(findPets)

  return (
    <div className=' w-full h-auto relative -translate-y-[150px] md:-translate-y-[300px]'>
        <img src='/assets/rip.png' className=' w-full'/>

        <div id='pets' className=' w-full bg-[#212121] h-auto relative z-50'>
         <section className="max-w-[1240px] flex flex-col gap-4 items-center mx-auto px-4 py-24  relative z-20">
        <h2 className="text-center text-3xl font-bold">Trainers</h2>
        

        <div className=' w-full flex items-center justify-center gap-4 mt-8 text-sm whitespace-nowrap overflow-x-auto '>
          <button className={`${tab === 'Novice' && ' border-b-4 border-green-500'} p-1 ml-8`} onClick={() => setTab('Novice')}>Novice</button>
          <button className={`${tab === 'Expert' && ' border-b-4 border-green-500'} p-1`} onClick={() => setTab('Expert')}>Expert</button>
          <button className={`${tab === 'Ace' && ' border-b-4 border-green-500'} p-1`} onClick={() => setTab('Ace')}>Ace</button>
          <button  disabled={true} className={`${tab === 'Ace of Spade' && ' border-b-4 border-green-500 '} text-zinc-400 p-1`} onClick={() => setTab('Ace of Spade')}>Ace of Spade</button>
          <button  disabled={true} className={`${tab === 'of Heart' && ' border-b-4 border-green-500 '} text-zinc-400 p-1`} onClick={() => setTab('Ace of Heart')}>Ace of Heart</button>

        </div>

        <p className=" text-zinc-400 max-w-[700px] text-center mt-2">{findPets?.description}</p>

        <div className=" flex flex-wrap justify-center gap-4 mt-8">
          {findPets?.trainers.map((item, index) => (

            <div  key={index} className=' group relative w-[220px] h-[280px] p-8'
            style={{backgroundImage: "url(/assets/card.png)", backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
            >

                <p className=' text-sm mt-4'>Meet</p>
                <h2 className=' text-2xl group-hover:text-orange-200 transition-colors duration-300 font-semibold text-orange-100'>{item.name}</h2>
                {/* <p className=' text-xs text-zinc-100'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat minus consequuntur, vitae placeat vel nostrum, saepe totam amet repellendus iste fuga esse? Suscipit blanditiis.</p> */}
                <img  src={findimg(item.name)} width={220} height={220} className=' group-hover:scale-110 transition-all duration-300 absolute bottom-0 right-0 translate-y-4 translate-x-6'/>

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
