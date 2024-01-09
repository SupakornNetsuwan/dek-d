"use client";
import { timer } from "@/core/lib/utils";
import React from "react";
import getAllBookMarks from "@/core/actions/get-all-bookmarks.action";
import BookMarkCard from "./bookmark";
import { BoxSelect } from "lucide-react";
import useBookmarkStorageAtom from "@/core/hooks/useBookmarkStorageAtom";
import Bookmark from "@/core/entities/bookmark.entity";

const BookmarkSection = () => {
  const { bookmarkList } = useBookmarkStorageAtom();

  if (!bookmarkList.length) {
    return (
      <div className="grid min-h-[50dvh] place-content-center rounded-lg bg-slate-50">
        <BoxSelect className=" w-full text-slate-500" size={32} />
        <h3 className=" mt-2 text-slate-500">ไม่มีรายการคั่น</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {bookmarkList.map((bookmark) => {
        const bookMarkInstance = new Bookmark(bookmark);

        return (
          <BookMarkCard
            key={bookmark.id}
            bookmarkDto={bookMarkInstance.toDto()}
          />
        );
      })}
    </div>
  );
};

export default BookmarkSection;
