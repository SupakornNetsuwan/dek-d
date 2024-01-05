"server only";
import React from "react";
import BookMark from "@/core/entities/BookMark";
import Image from "next/image";
import bookMarkThumbnail from "@public/bookmark-thumbnail.jpg";

const BookMarkCard: React.FC<{ bookMark: BookMark }> = ({ bookMark }) => {
  return (
    <div className="bg-white p-2 flex">
      <div className="basis-1/3">
        <Image src={bookMarkThumbnail} alt="bookmark_thumbnail"/>
      </div>
      <div className="basis-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perspiciatis.
      </div>
    </div>
  );
};

export default BookMarkCard;
