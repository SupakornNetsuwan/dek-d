import Book from "@/core/entities/book.entity";
import { CreateBookmarkSchemaType } from "@/core/entities/bookmark.entity";
import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";
import LineChart from "./LineChart";

const BookThumbnail = () => {
  const { getValues } = useFormContext<CreateBookmarkSchemaType>();

  const book = new Book(getValues("book"));

  return (
    <div className="relative w-full rounded-lg bg-gradient-to-r from-slate-50 via-white to-slate-50 p-2">
      <Image
        src={`/${book.thumbnail}`}
        alt={`${book.name}_cover`}
        width={60}
        height={0}
        className="hidden md:block absolute right-[4vw] top-0 box-content w-auto h-auto -translate-y-1/2 rounded-sm border-4 border-white shadow-xl"
      />
      <h3 className="pb-1 text-lg font-semibold text-orange-500">
        {book.name}
      </h3>
      <div className="flex gap-x-1 [&>p]:rounded-full [&>p]:bg-slate-100 [&>p]:px-2 [&>p]:py-0.5 [&>p]:text-xs [&>p]:text-slate-500">
        <p>โดย {book.author}</p>
        <p>จำนวนตอนทั้งหมด {book.getLastEpisode?.nth}</p>
      </div>
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default BookThumbnail;
