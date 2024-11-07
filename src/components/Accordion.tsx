import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionComponent() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Dlaczego warto wejść we współpracę ze mną?</AccordionTrigger>
          <AccordionContent>
            Tego nie wie nikt.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Dlaczego indywidualny plan treningowy jest tak ważny i znajomość swojego ciała?</AccordionTrigger>
          <AccordionContent>
            Napisz te pytanie po polsku i dopiero potem napisz odpowiedź.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Gdzie mnie można znaleźć</AccordionTrigger>
          <AccordionContent>
            Siłownia Well Fitness - ul. Wiwulskiego 12, Wrocław.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  