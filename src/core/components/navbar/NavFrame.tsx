import React, { useCallback } from "react";
import logo from "@public/logo.png";
import Image from "next/image";
import useIsNavbarOpen from "./hooks/useNavbarIsOpen";
import { Menu as NavbarBurger } from "lucide-react";

const NavFrame: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [_, setIsOpen] = useIsNavbarOpen();

  const toggle = useCallback(
    () => setIsOpen((prevToggleState) => !prevToggleState),
    [setIsOpen],
  );

  return (
    <div className="sticky z-30 mx-auto mb-4 flex w-full max-w-lg items-center justify-between gap-x-8 border-b bg-white p-3 drop-shadow-sm lg:top-2 lg:mt-2 lg:rounded lg:bg-white/90 lg:backdrop-blur-sm">
      <Image
        src={logo}
        alt="dek-d_logo"
        className="pointer-events-none size-8"
      />
      <NavbarBurger
        size={24}
        onClick={toggle}
        className="box-content self-center p-1 text-slate-800 lg:hidden"
      />
      {children}
    </div>
  );
};

export default NavFrame;
