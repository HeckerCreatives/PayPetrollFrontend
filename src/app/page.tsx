"use client"
import { ChevronLeft, ChevronRight, Facebook, Instagram, Menu, PawPrint, Play, Youtube } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Header from "./sections/Header";
import ParallaxSection from "./sections/Parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Characters from "./sections/Characters";
import Gameplay from "./sections/Gameplay";
import News from "./sections/News";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FAQSection from "./sections/Faq";


const latestPosts = [
  {
    id: 1,
    title: "First blog post with a somewhat lengthy title here",
    thumbnail: "/placeholder.svg?height=60&width=60",
    date: "2023-12-20",
  },
  {
    id: 2,
    title: "Second blog post with another interesting title",
    thumbnail: "/placeholder.svg?height=60&width=60",
    date: "2023-12-19",
  },
  {
    id: 3,
    title: "Third blog post showing more content",
    thumbnail: "/placeholder.svg?height=60&width=60",
    date: "2023-12-18",
  },
]

const navigation = [
  { name: "Home", href: "#" },
  { name: "Games", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Forum", href: "#" },
  { name: "Contact", href: "#" },
]

interface List {
  _id: string,
  link: string,
  title: string,
}


export default function Home() {

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
    <ParallaxProvider >
       <div className=" relative text-white bg-[#212121] overflow-x-hidden z-50 ">
        <div className=" hidden fixed z-[99] right-0 md:flex flex-col gap-6 top-[50%] bg-green-700 p-4 rounded-l-md">

          {list.map((item, index) => (
              <a key={index} href={item.link} className=' hover:scale-110 transition-all duration-200' target='_blank'>
              {icon(item.title)}
            </a>
            ) )}

        </div>
        <Header/>
        <Characters/>
        <Gameplay/>
        <FAQSection/>
        <News/>
        {/* <Reviews/> */}
        <Footer/>
      </div>
    </ParallaxProvider>
   
  );
}
