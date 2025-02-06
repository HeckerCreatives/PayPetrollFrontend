'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { termsAndConditions, privacyPolicy } from '../data'




export default function Footer() {
  const [activeTab, setActiveTab] = useState("terms")

  return (
    <footer className=" w-full text-white py-20 px-4 ">
        <div className=" flex flex-col items-center gap-4 w-full text-center text-sm">
          <img src="/logo.png" width={200} height={200} />

            <div className="flex items-center gap-6 text-gray-200 text-sm md:text-lg">
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
                    How to play
                    </a>
            
            </div>

            <Dialog>
            <DialogTrigger>
              <div className=' flex items-center gap-4 mt-4 text-zinc-200'>
                <p onClick={() => setActiveTab('terms')} className=' hover:text-green-500 cursor-pointer'>Terms & Conditions</p>
                <p onClick={() => setActiveTab('privacy')} className=' hover:text-green-500 cursor-pointer'>Privacy Policy</p>

              </div>
            </DialogTrigger>
            <DialogContent className=' bg-zinc-900 text-white w-[95%] md:w-full max-h-[90%] overflow-y-auto'>
              <DialogHeader>
                <DialogTitle>Paypetroll Legal Information</DialogTitle>
                <DialogDescription>
                  Please review our Terms & Conditions and Privacy Policy
                </DialogDescription>
              </DialogHeader>
              <div className="w-full max-w-4xl mx-auto text-sm">
              
             
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 bg-zinc-700">
                      <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
                      <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                    </TabsList>
                    <TabsContent value="terms">
                      <Accordion type="single" collapsible className="w-full">
                        {termsAndConditions.map((item, index) => (
                          <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent className=' text-zinc-200'>{item.content}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabsContent>
                    <TabsContent value="privacy">
                      <Accordion type="single" collapsible className="w-full">
                        {privacyPolicy.map((item, index) => (
                          <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent className=' text-zinc-200 whitespace-pre-wrap'>{item.content}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabsContent>
                  </Tabs>
               
              </div>
            </DialogContent>
          </Dialog>

        <p className=" text-xs text-zinc-400">© 2023 Game Company. All Rights Reserved.</p>
        </div>
    </footer>
  )
}
