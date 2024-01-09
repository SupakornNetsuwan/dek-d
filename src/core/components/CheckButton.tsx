import React from "react";
import { Button } from "@components/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/core/lib/utils";

type CheckButtonPropsType = {
  isSelected: boolean;
};

const CheckButton: React.FC<
  React.ComponentPropsWithoutRef<typeof Button> & CheckButtonPropsType
> = ({ children, isSelected, className, ...props }) => {
  return (
    <Button
      type="button"
      variant="secondary"
      className={cn(
        "relative flex items-center gap-x-1 overflow-hidden bg-slate-50 py-4 text-slate-500 transition-all duration-150 hover:bg-slate-100 lg:py-0 [&>svg]:translate-x-full [&>svg]:opacity-0",
        isSelected &&
          "border border-orange-500 bg-orange-50 pr-8 text-orange-500 hover:bg-orange-50 [&>svg]:translate-x-0 [&>svg]:opacity-100",
        className,
      )}
      {...props}
    >
      {children}
      <CheckCircle2
        size={18}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 transition-all duration-300"
      />
    </Button>
  );
};

export default CheckButton;
