"server only";
import { timer } from "@/core/lib/utils";
import React from "react";
import getAllBookMarks from "@/core/actions/getAllBookMarks";
import BookMarkCard from "./bookmark";
import { BoxSelect } from "lucide-react";

const BookmarkSection = async () => {
  // await timer(100);
  const allBookMarks = await getAllBookMarks();

  if (!allBookMarks.length) {
    return (
      <div className="grid min-h-[50dvh] place-content-center rounded-lg bg-slate-50">
        <BoxSelect className=" w-full text-slate-500" size={32} />
        <h3 className=" text-slate-500 mt-2">ไม่มีรายการคั่น</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {allBookMarks.map((bookMark) => (
        <BookMarkCard
          key={bookMark.id}
          plainBookMarkObject={bookMark.toPlainObject()}
        />
      ))}
    </div>
  );
};

export default BookmarkSection;
