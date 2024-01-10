import Book from "@/core/entities/book.entity";
import { CreateBookmarkSchemaType } from "@/core/entities/bookmark.entity";
import { PencilLine } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";

const BookThumbnail = () => {
  const { getValues } = useFormContext<CreateBookmarkSchemaType>();

  const book = new Book(getValues("book"));

  return (
    <div className="w-full rounded-lg bg-gradient-to-r from-white via-white to-slate-50 p-2">
      <div className="relative flex gap-x-4">
        <Image
          src={`/${book.thumbnail}`}
          alt={`${book.name}_cover`}
          width={200}
          height={90}
          className="rounded-md"
        />
        <div className="flex-1 rounded">
          <h3 className="pb-1 text-lg font-semibold text-orange-500">
            {book.name}
          </h3>
          <div className="flex gap-x-1 [&>p]:rounded-full [&>p]:bg-slate-100 [&>p]:px-2 [&>p]:py-0.5 [&>p]:text-xs [&>p]:text-slate-500">
            <p>โดย {book.author}</p>
            <p>จำนวนตอนทั้งหมด {book.getLastEpisode?.nth}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookThumbnail;
