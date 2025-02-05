import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "../data"



export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 flex items-center justify-center bg-[#212121]">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className=" whitespace-pre-wrap text-sm text-start text-zinc-300">
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} className=" text-start " />

              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

