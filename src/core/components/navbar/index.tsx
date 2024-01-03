"use client";
import { useCallback, useState } from "react";
import { Button } from "@components/button";
import logo from "@public/logo.png";
import Image from "next/image";
import { Menu, User } from "lucide-react";
import SmallNavbarCore from "./small";
import LargeNavbarCore from "./large";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(
    () => setIsOpen((prevToggleState) => !prevToggleState),
    [],
  );

  return (
    <>
      <div className="sticky top-0 z-30 mx-auto mb-4 flex w-full max-w-lg justify-between gap-x-8  border-b bg-white p-3 drop-shadow-sm lg:mt-2 lg:rounded-b-md lg:bg-white/90 lg:backdrop-blur-sm">
        <Image
          src={logo}
          alt="dek-d_logo"
          className="pointer-events-none size-8"
        />
        <Menu
          size={24}
          onClick={() => {
            toggle();
          }}
          className="box-content self-center p-1 text-slate-800 lg:hidden"
        />
        <LargeNavbarCore />
        <Button
          variant="outline"
          className="hidden text-orange-500 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500 lg:flex items-center gap-1"
        >
          <User size={18} />
          <span>เข้าสู่ระบบ</span>
        </Button>
      </div>
      <SmallNavbarCore isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
