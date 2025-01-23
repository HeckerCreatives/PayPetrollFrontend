"use client"
import { ChevronLeft, ChevronRight, Menu, PawPrint, Play } from "lucide-react";
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


export default function Home() {
  return (
    <ParallaxProvider >
       <div className=" relative text-white bg-[#212121] overflow-x-hidden z-50 ">
        <Header/>
        <Characters/>
        <Gameplay/>
        <News/>
        <Reviews/>
        <Footer/>
      </div>
    </ParallaxProvider>
   
  );
}
