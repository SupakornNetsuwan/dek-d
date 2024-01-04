"use client";
import { useCallback, useState } from "react";
import SmallNavbarCore from "./small";
import LargeNavbarCore from "./large";
import NavFrame from "./NavFrame";
import useIsNavbarOpen from "./hooks/useNavbarIsOpen";

// Single point of truth (เวลาดึง Dynamic categories มาใช้ หรือปรับเปลี่ยนได้ทันที)

export const novelCategories = [
  {
    name: "นิยายแนะนำ ✨",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
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

export const howToUseCategories = [
  {
    name: "กติกาการใช้งาน",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "ขั้นตอนการใช้งาน",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    name: "เริ่มต้นเขียนนิยาย",
    description: "Lorem ipsum dolor consectetur adipi",
  },
  {
    name: "บอร์ดนักเขียน",
    description: "Lorem ipsum dolor adipisicing elit.",
  },
  {
    name: "คำถามที่พบบ่อย",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  { name: "แจ้งปัญหาการใช้งาน", description: "Lorem ipsum dolor consectetur" },
];

const Navbar = () => {
  return (
    <>
      <NavFrame>
        <LargeNavbarCore />
      </NavFrame>
      <SmallNavbarCore />
    </>
  );
};

export default Navbar;
