"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/dropdown-menu";
import { Button } from "@/core/components/ui/button";
import { Plus, Settings2, Trash2 } from "lucide-react";

const MenuBar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="ml-auto block">
        <Button variant="outline" className="flex space-x-1">
          <Settings2 size={16} />
          <span>ตั้งค่า</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 max-w-none">
        <DropdownMenuItem className="group flex justify-between cursor-pointer p-1 sm:p-2">
          <Plus
            size={14}
            className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
          />
          <span>เพิ่มรายการ</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="group flex justify-between cursor-pointer p-1 sm:p-2">
          <Trash2
            size={14}
            className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
          />
          <span>ลบรายการ</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuBar;
