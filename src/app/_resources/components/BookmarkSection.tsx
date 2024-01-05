"server only";
import { timer } from "@/core/lib/utils";
import React from "react";
import getAllBookMarks from "@/core/actions/getAllBookMarks";
import BookMarkCard from "./bookmark";

const BookmarkSection = async () => {
  // await timer(100);
  const allBookMarks = await getAllBookMarks();

  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
      {allBookMarks.map((bookMark) => (
        <BookMarkCard key={bookMark.id} bookMark={bookMark} />
      ))}
    </div>
  );
};

export default BookmarkSection;
