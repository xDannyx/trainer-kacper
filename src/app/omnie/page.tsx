import { AccordionComponent } from "@/components/Accordion";
import { CarouselComponent } from "@/components/Carousel";

export default function AboutMe() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center">
       Moja przygoda ze sportem rozpoczęła się w wieku 7 lat, kiedy zakochałem się w piłce nożnej. Próbowałem różnych dyscyplin, jak badminton, kickboxing czy tenis, jednak w wieku 19 lat odkryłem pasję do siłowni. Doceniam trening siłowy za wymaganą systematyczność, dlatego zrezygnowałem z piłki, aby skupić się na budowaniu zdrowej i  estetycznej sylwetki. Ukończyłem pierwszy kurs na trenera personalnego, co zmotywowało mnie do dalszego rozwoju i pomagania innym. Z czasem zdobyłem kolejne kwalifikacje, które pogłębiły moją wiedzę i możliwości pracy z podopiecznymi.
       <CarouselComponent/>
       <AccordionComponent/>
       </main>
    </div>
  );
}
