"use client";
import { timer } from "@/core/lib/utils";
import React from "react";
import getAllBookMarks from "@/core/actions/get-all-bookmarks.action";
import BookMarkCard from "./bookmark";
import { BoxSelect } from "lucide-react";
import useBookMarkStorageAtom from "@/core/hooks/useBookMarkStorageAtom";
import BookMark from "@/core/entities/bookmark.entity";

const BookmarkSection = () => {
  const [bookMarkStorage] = useBookMarkStorageAtom();

  if (!bookMarkStorage.length) {
    return (
      <div className="grid min-h-[50dvh] place-content-center rounded-lg bg-slate-50">
        <BoxSelect className=" w-full text-slate-500" size={32} />
        <h3 className=" mt-2 text-slate-500">ไม่มีรายการคั่น</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {bookMarkStorage.map((bookMark) => {
        const bookMarkInstance = new BookMark(bookMark);
        return (
          <BookMarkCard
            key={`${Math.floor(Math.random() * 100)}_${bookMark.book.id}_${
              bookMark.flaggedEpisode.nth
            }`}
            bookMarkDto={bookMarkInstance.toDto()}
          />
        );
      })}
    </div>
  );
};

export default BookmarkSection;
