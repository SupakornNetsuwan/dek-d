import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@components/popover";
import { Button } from "@components/button";
import { cn } from "@/core/lib/utils";

const NavbarPopover: React.FC<
  React.PropsWithChildren & {
    popoverContent: React.ReactNode;
  } & React.ComponentPropsWithoutRef<typeof PopoverContent>
> = ({ children, className, popoverContent, ...props }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        {...props}
        className={cn(
          "grid w-auto grid-flow-col grid-rows-2 gap-2 bg-orange-fade to-white",
          className,
        )}
      >
        {popoverContent}
      </PopoverContent>
    </Popover>
  );
};

export default NavbarPopover;
