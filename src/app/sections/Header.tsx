'use client'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Facebook, Instagram, Menu, Youtube } from 'lucide-react'
import { Parallax } from 'react-scroll-parallax'
import axios, { AxiosError } from 'axios'
import { FaDiscord, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'



interface List {
    _id: string,
    link: string,
    title: string,
  }



export default function Header() {
    const [list, setList] = useState<List[]>([])
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sociallinks/getsociallinkslp`,{
          withCredentials:true
          })
  
          setList(response.data.data)
          
        } catch (error) {
          
      }
    }
      getData()
  },[])

  const icon = (data: string) => {
    if(data === 'facebook'){
      return <Facebook size={25}/>
    }else if(data === 'discord'){
      return  <FaDiscord size={25} />
    }else if(data === 'x'){
      return  <FaXTwitter size={25}/>
    }else if(data === 'instagram'){
      return  <Instagram size={25}/>
    }else if(data === 'telegram'){
      return  <FaTelegram  size={25}/>
    } else {
      return  <Youtube size={25}/>
  
    }
  }


  return (

    <div className=' relative flex items-start h-[100dvh]'>
        <Parallax translateY={[-50, 50]} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <section className="relative overflow-hidden h-full w-full flex items-center justify-center flex-col mt-0 "
            style={{backgroundImage: "url(/hero2.png)", backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
            >
            <header className=" absolutez-50 top-0 z-50 px-4 text-sm font-semibold w-full ">
                <nav className="max-w-[1240px] mx-auto flex items-center justify-between">
                <img src="/logo.png" alt="Logo" width={120} height={120}  className=" " />
                <div className="hidden md:flex items-center gap-6 text-white text-sm">
                    <a href="#" className="hover:text-green-500">
                    Home
                    </a>
                    <a href="#pets" className="hover:text-green-500">
                    Pets
                    </a>
                    <a href="#gameplay" className="hover:text-green-500">
                    Gameplay
                    </a>
                    <a href="#faq" className="hover:text-green-500">
                    FAQ
                    </a>
                    <a href="#news" className="hover:text-green-500">
                    News
                    </a>
                   
                  
                
                </div>
                <a href={process.env.NEXT_PUBLIC_LOGIN} target='_blank' className=" bg-green-600 px-6 py-2 rounded-full lg:block hidden">
                   Sign in
                </a>
                <Sheet>
                <SheetTrigger asChild className="md:hidden">
                    <Menu className="h-6 w-6 text-white" />
                    
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#212121] border-zinc-700 text-white text-sm gap-2">
                    <nav className="flex flex-col gap-2 mt-8">

                    <div className=" flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" width={120} height={120}  className=" " />

                    </div>
                    <a href="#" className="hover:text-green-500">
                    Home
                    </a>
                    <a href="#pets" className="hover:text-green-500">
                    Pets
                    </a>
                    <a href="#gameplay" className="hover:text-green-500">
                    Gameplay
                    </a>
                    <a href="#faq" className="hover:text-green-500">
                    FAQ
                    </a>
                    <a href="#news" className="hover:text-green-500">
                    News
                    </a>

                    <a href={process.env.NEXT_PUBLIC_LOGIN} target='_blank' className=" bg-green-600 px-6 py-2 rounded-full w-fit text-white mt-4 ">
                    Sign in
                    </a>

                    <p className=' text-xs text-zinc-500 mt-6'>Follow us on:</p>

                    <div className=' flex items-center gap-2 text-white  mt-2'>
                        {list.map((item, index) => (
                        <a key={index} href={item.link} className=' hover:scale-110 transition-all duration-200' target='_blank'>
                        {icon(item.title)}
                        </a>
                        ) )}
                    </div>

                    </nav>
                </SheetContent>
                </Sheet>
                </nav>
            </header>

            <div className=" w-[70%] absolute left-0 h-full bg-gradient-to-r from-black to-black/0">
            </div>
            <div className=" w-full flex items-center justify-center relative z-10 h-full ">

                <img src="/logo.png" alt="Logo" width={650} height={650}  className=" -translate-y-24 md:-translate-y-0 relative z-30" />

                {/* <div className=" relative z-30 max-w-[1240px] w-full flex flex-col gap-4 justify-center h-full px-4">
                <h2 className=" text-6xl font-semibold text-white md:text-start text-center">Welcome to <span className=" text-green-400">Pay Petrols</span></h2>
                <p className=" w-full md:max-w-[60%] text-zinc-300 md:text-start text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae laudantium, eveniet eius enim voluptatem quos praesentium ipsam maxime necessitatibus porro voluptates numquam quisquam, quasi amet veniam accusamus rem, mollitia sit!</p>

                <div className=" w-full flex items-center md:justify-start justify-center">
                <button className="bg-green-600 text-white px-6 py-2 mt-4 rounded-full hover:bg-green-700 w-fit">Play now</button>

                </div>


                </div> */}
                
            </div>
            <div className="absolute h-full inset-0 bg-[url('/placeholder.svg')] opacity-20"></div>
            </section>
        </Parallax>
    </div>
   
   
  )
}
