import Link from "next/link";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/core/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

/**
 * @description Component สำหรับห่อห้มส่วนหลักของ Navigation bar 📦
 */

const Wrapper: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
}) => {
  return <div className={cn("max-w-none", className)}>{children}</div>;
};

type ItemPropsType = {
  asChild?: boolean;
};

const item = cva("", {
  variants: {
    variants: {
      default:
        "rounded-md px-3 py-1.5 hover:bg-orange-100 hover:text-orange-500",
      plain: "",
    },
  },
  defaultVariants: {
    variants: "default",
  },
});

/**
 * @description Component สำหรับแสดง Item ที่ถูกแสดงผลหลักสำหรับ Navigation bar
 */

const Item = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> &
    VariantProps<typeof item> &
    ItemPropsType
>(({ children, asChild, className, variants, ...props }, ref) => {
  const Component = asChild ? Slot : Link;

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-colors duration-100",
        item({ variants, className }),
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Item.displayName = "Item";

const List = {
  Wrapper,
  Item,
};

export default List;
