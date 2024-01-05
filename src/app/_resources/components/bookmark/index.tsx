"server only";
import React from "react";
import BookMark from "@/core/entities/BookMark";
import Image from "next/image";
import bookMarkThumbnail from "@public/bookmark-thumbnail.jpg";
import { cn } from "@/core/lib/utils";

const BookMarkCard: React.FC<{ bookMark: BookMark }> = ({ bookMark }) => {
  console.log(bookMark.getProgress);
  return (
    <div className="flex rounded-lg border bg-gray-50 p-2">
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
        <p className="text-xs text-slate-500">{bookMark.author}</p>
        <div>
          <div className={cn("h-1 w-full rounded-full bg-slate-200/80")}>
            <div className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkCard;
