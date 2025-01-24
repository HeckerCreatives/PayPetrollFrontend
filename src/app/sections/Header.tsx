import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Parallax } from 'react-scroll-parallax'

const navigation = [
    { name: "Home", href: "#" },
    { name: "Games", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Forum", href: "#" },
    { name: "Contact", href: "#" },
  ]

export default function Header() {
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
                    <a href="#" className="hover:text-green-500">
                    Games
                    </a>
                    <a href="#" className="hover:text-green-500">
                    Blog
                    </a>
                    <a href="#" className="hover:text-green-500">
                    Forum
                    </a>
                    <a href="#" className="hover:text-green-500">
                    Contact
                    </a>
                
                </div>
                <button className=" lg:block hidden aspect-video h-[80px]">
                    <img src="/assets/playnow.png" width={200} className=" hover:scale-110 transition-all duration-300"/>
                </button>
                <Sheet>
                <SheetTrigger asChild className="md:hidden">
                    <Menu className="h-6 w-6 text-white" />
                    
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#212121] border-zinc-700">
                    <nav className="flex flex-col gap-2 mt-8">

                    <div className=" flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" width={120} height={120}  className=" " />

                    </div>

                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="block px-2 py-3 text-sm hover:text-green-500 transition-colors text-white"
                        >
                        {item.name}
                        </a>
                    ))}

                    <button className=" aspect-video h-[50px]">
                        <img src="/assets/playnow.png" width={150} className=" hover:scale-110 transition-all duration-300"/>
                    </button>

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
