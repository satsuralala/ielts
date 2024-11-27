import { FAQ_QUESTIONS } from "@/app/landing/lib/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FC } from "react";
export const FaqSection: FC = () => {
  return (
    <section className="container py-20 flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">FAQ</h1>
      <p className="text-xl">
        List of the most common questions about a premium Alpha Moodle theme.
      </p>
      <div className="flex flex-col items-stretch w-full mx-32 gap-4 ">
        <Accordion type="single" collapsible className="space-y-8">
          {FAQ_QUESTIONS.map((faq, indexas) => (
            <div
              key={faq.question}
              className="flex justify-between px-4 py-2 bg-gray-100 rounded-3xl group hover:bg-gray-300 duration-200 ease-in-out "
            >
              <AccordionItem value={faq.question} className="flex-1">
                <AccordionTrigger className="text-lg font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-medium ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
