import React from "react";
import NavList from "../NavList";
import NavbarPopover from "../NavbarPopover";
import { ChevronDown, ChevronRight, MoveRight } from "lucide-react";
import { howToUseCategories, novelCategories } from "..";

const LargeNavbarCore = () => {
  return (
    <NavList.Wrapper className="hidden items-center gap-x-1 lg:flex ">
      <NavbarPopover
        popoverContent={novelCategories.map(({ name, description }) => (
          <div
            className="group max-w-48 cursor-pointer rounded border border-transparent  p-3 duration-150 hover:border-orange-300 hover:bg-orange-50 [&:nth-child(1)]:row-span-full  [&:nth-child(1)]:bg-white  "
            key={name}
          >
            <div className="relative">
              <h4 className="font-medium duration-150 group-hover:text-orange-500">
                {name}
              </h4>
              <MoveRight
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-orange-500 opacity-0 duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                size={18}
              />
            </div>
            <p className="line-clamp-2 text-balance text-xs text-slate-500 duration-150 group-hover:text-slate-800">
              {description}
            </p>
          </div>
        ))}
      >
        <NavList.Item href="" asChild>
          <button className="flex items-center gap-1 [&[data-state=open]>svg]:-rotate-180">
            <span>นิยาย</span>
            <ChevronDown size={16} className="duration-150 ease-out" />
          </button>
        </NavList.Item>
      </NavbarPopover>
      <NavList.Item href="#">ร้านค้า</NavList.Item>

      <NavbarPopover
        className="grid-rows-3"
        popoverContent={howToUseCategories.map(({ name, description }) => (
          <div
            className="group max-w-48 cursor-pointer rounded border border-transparent p-3 duration-150 hover:border-orange-200 hover:bg-orange-50"
            key={name}
          >
            <div className="relative">
              <h4 className="font-medium duration-150 group-hover:text-orange-500">
                {name}
              </h4>
              <MoveRight
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-orange-500 opacity-0 duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                size={18}
              />
            </div>
            <p className="line-clamp-2 text-balance text-xs text-slate-500 duration-150 group-hover:text-slate-800">
              {description}
            </p>
          </div>
        ))}
      >
        <NavList.Item href="" asChild>
          <button className="flex items-center gap-1 [&[data-state=open]>svg]:-rotate-180">
            <span>วิธีใช้</span>
            <ChevronDown size={16} className="duration-150 ease-out" />
          </button>
        </NavList.Item>
      </NavbarPopover>
      <NavList.Item href="#">มุมนักเขียน</NavList.Item>
      <NavList.Item href="#">แต่งนิยาย</NavList.Item>
    </NavList.Wrapper>
  );
};

export default LargeNavbarCore;
