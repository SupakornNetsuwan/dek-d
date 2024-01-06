"use client";
import React, { useMemo } from "react";
import BookMark, { BookMarkDto } from "@/core/entities/BookMark";
import Image from "next/image";
import bookMarkThumbnail from "@public/bookmark-thumbnail.jpg";
import { useGSAP } from "@gsap/react";
import { formatThaiDate } from "@/core/lib/utils";
import ProgressBar from "./ProgressBar";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import { gsap } from "gsap";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/dropdown-menu";

const BookMarkCard: React.FC<{ plainBookMarkObject: BookMarkDto }> = ({
  plainBookMarkObject,
}) => {
  useGSAP(() => {});

  const bookMark = useMemo(
    () => new BookMark(plainBookMarkObject),
    [plainBookMarkObject],
  );

  return (
    <div className="flex flex-col space-y-1 rounded-lg border bg-gray-50 p-2">
      <div className="flex w-full justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-6 sm:size-5 rounded-sm sm:border-none"
            >
              <MoreHorizontal size={14} className="" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36 max-w-none">
            <DropdownMenuItem className="group flex cursor-pointer justify-between p-1 sm:p-2">
              <Pencil
                size={14}
                className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
              />
              <span>แก้ไขรายการ</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="group flex cursor-pointer justify-between p-1 sm:p-2">
              <Trash2
                size={14}
                className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
              />
              <span>ลบรายการ</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <div className="basis-1/3">
          <Image
            src={bookMarkThumbnail}
            alt="bookmark_thumbnail"
            className="rounded-lg"
          />
        </div>
        <div className="ml-1.5 flex basis-2/3 flex-col  overflow-hidden rounded-md bg-white p-1.5">
          <h4 className="truncate text-base font-medium text-orange-500">
            {bookMark.name}
          </h4>

          <p className="text-xs leading-tight text-slate-500">
            {bookMark.author}
          </p>
          <div className="mt-auto flex flex-col items-start">
            <div className="flex w-full justify-start">
              <p className="whitespace-nowrap rounded-sm bg-green-50 px-1 py-0.5 text-[10px] text-green-500">
                ตอนที่ {bookMark.getMarkedEpisode?.nth}
              </p>
              <p
                title={bookMark.getMarkedEpisode?.name}
                className="max-w-full truncate rounded-sm bg-slate-50 px-1 py-0.5 text-[10px] text-slate-500"
              >
                {bookMark.getMarkedEpisode?.name}
              </p>
            </div>
            <ProgressBar.Wrapper className="my-2">
              <ProgressBar.Solid
                data={[...new Array(bookMark.getMarkedEpisode?.nth).keys()]}
              />
              <ProgressBar.Empty
                data={[...new Array(bookMark.getLastEpisode?.nth).keys()]}
              />
            </ProgressBar.Wrapper>
          </div>
          <div>
            <p className="text-[10px] text-slate-500">
              คั่นล่าสุด {formatThaiDate(bookMark.updatedAt).join(" ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkCard;
