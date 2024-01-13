import React from "react";
import useBookmarkStorageAtom from "@/core/hooks/useBookmarkStorageAtom";
import Bookmark from "@/core/entities/bookmark.entity";
import BookmarkBar from "./BookmarkBar";

const Visualize = () => {
  const { bookmarkList } = useBookmarkStorageAtom();

  return (
    <div className="pt-4">
      <div className="relative flex min-h-[25dvh] w-full gap-x-0.5 bg-gradient-to-t from-orange-50 to-white px-2 pl-8 sm:pl-2">
        {bookmarkList.map((bookmarkDto) => {
          const bookMark = new Bookmark(bookmarkDto);
          return <BookmarkBar key={bookMark.id} bookmark={bookMark} />;
        })}
        <div className="absolute inset-0 z-0 flex flex-col ">
          {[...Array(10).keys()].reverse().map((percent) => {
            const formattedPercent = `${percent + 1}0%`;
            return (
              <div key={percent} className="relative flex-1 bg-transparent">
                <div className="absolute left-6 sm:left-8 right-0 top-0 h-px bg-slate-300 " />
                <p className="absolute -translate-y-1/2 text-[10px] sm:text-xs text-slate-500">
                  {formattedPercent}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-1 h-1 w-full rounded-full bg-orange-300" />
      <div className="bg-gradient-to-b from-orange-100/80 to-white py-2">
        <p className="text-center text-sm text-slate-600">
          ที่คั่นหนังสือของคุณ
        </p>
      </div>
    </div>
  );
};

export default Visualize;
