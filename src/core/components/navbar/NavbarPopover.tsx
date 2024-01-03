import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@components/popover";
import { Button } from "@components/button";

const NavbarPopover: React.FC<
  React.PropsWithChildren & { popoverContent: React.ReactNode }
> = ({ children, popoverContent }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="bg-orange-fade grid w-auto grid-flow-col grid-rows-2 gap-2 to-white ">
        {popoverContent}
      </PopoverContent>
    </Popover>
  );
};

export default NavbarPopover;
