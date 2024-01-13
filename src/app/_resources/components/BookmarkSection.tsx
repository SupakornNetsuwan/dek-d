"use client";
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
      {bookmarkList.map((bookmarkDto) => {
        const bookMark = new Bookmark(bookmarkDto);

        return (
          <BookMarkCard
            key={bookmarkDto.id}
            bookmark={bookMark}
          />
        );
      })}
    </div>
  );
};

export default BookmarkSection;
