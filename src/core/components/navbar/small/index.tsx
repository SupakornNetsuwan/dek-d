import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/accordion";
import NavList from "../NavList";
import { cn } from "@/core/lib/utils";

const novelCategories = [
  { name: "นิยายแนะนำ", description: "Lorem ipsum dolor sit amet consectetur" },
  {
    name: "นิยายติดท็อป",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  { name: "รีวิวนิยาย", description: "Lorem ipsum dolor consectetur adipi" },
  {
    name: "คอลเล็กชันนิยาย",
    description: "Lorem ipsum dolor adipisicing elit.",
  },
  { name: "นิยายตลอดกาล", description: "Lorem ipsum dolor sit amet" },
];

const SmallNavbarCore: React.FC<{ isOpen: boolean; toggle: () => void }> = ({
  isOpen,
  toggle,
}) => {
  return (
    <div className={cn("fixed inset-0 z-40", !isOpen && "pointer-events-none")}>
      <div
        className={cn(
          "absolute inset-y-0 z-10 w-full max-w-80 translate-x-0 bg-white p-8 duration-200",
          !isOpen && "-translate-x-full opacity-0",
        )}
      >
        <NavList.Wrapper className="flex flex-col gap-y-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="no-underline">
                <NavList.Item variants="plain" href="#">
                  นิยาย
                </NavList.Item>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-2 text-slate-500">
                {novelCategories.map(({ description, name }) => (
                  <NavList.Item variants="plain" key={name} href="#">
                    {name}
                  </NavList.Item>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <NavList.Item variants="plain" href="#">
            ร้านค้า
          </NavList.Item>
          <NavList.Item variants="plain" href="#">
            วิธีใช้
          </NavList.Item>
          <NavList.Item variants="plain" href="#">
            มุมนักเขียน
          </NavList.Item>
          <NavList.Item variants="plain" href="#">
            แต่งนิยาย
          </NavList.Item>
        </NavList.Wrapper>
      </div>
      <div
        onClick={toggle}
        className={cn(
          "duration-400 absolute inset-0 translate-x-0 bg-black/40 opacity-100 backdrop-blur duration-300",
          !isOpen && "opacity-0",
        )}
      />
    </div>
  );
};

export default SmallNavbarCore;
