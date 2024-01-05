import React from "react";
import { cn } from "../lib/utils";

/**
 * @description ส่วนที่ทำหน้าที่เป็นหน้า Wrapper หลักของแอปพลิเคชั่นเพื่อให้เกิดความ Consistency ระหว่างหน้าที่แตกต่างกัน
 */

const PrimaryWrapper: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("mx-auto w-full max-w-lg p-4 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default PrimaryWrapper;
