import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of web development and design services, including responsive website design, e-commerce solutions, custom web applications, and ongoing maintenance and support.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a more complex web application could take 2-3 months or more. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer mobile app development?",
    answer:
      "Yes, we offer mobile app development for both iOS and Android platforms. We can create native apps or cross-platform solutions depending on your needs and budget.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the specific requirements of each client. We offer competitive rates and will provide a detailed quote after our initial consultation and requirements gathering phase.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "We offer various support and maintenance packages to ensure your website or application continues to run smoothly after launch. These can include regular updates, security patches, and technical support.",
  },
]

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
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

