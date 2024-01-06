import { cn } from "@/core/lib/utils";
import React, { HTMLAttributes } from "react";

const Wrapper: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "my-1 flex h-1  w-full gap-0.5 overflow-hidden rounded-sm ",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Solid: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { data: (string | number)[] }
> = ({ data, className, ...props }) => {
  return data.map((point) => (
    <div
      key={point}
      className={cn("flex-1 rounded-full bg-green-500", className)}
      {...props}
    />
  ));
};

const Empty: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { data: (string | number)[] }
> = ({ data, className, ...props }) => {
  return data.map((point) => (
    <div
      key={point}
      className={cn("flex-1 rounded-full bg-slate-200", className)}
      {...props}
    />
  ));
};

const ProgressBar = {
  Wrapper,
  Solid,
  Empty,
};

export default ProgressBar;
