import Book from "@/core/entities/book.entity";
import { CreateBookmarkSchemaType } from "@/core/entities/bookmark.entity";
import React from "react";
import { useFormContext } from "react-hook-form";

const BookThumbnail = () => {
  const { getValues } = useFormContext<CreateBookmarkSchemaType>();

  const book = new Book(getValues("book"));

  return <div className="min-h-[20dvh] w-full">BookThumbnail และ ทำกราฟ</div>;
};

export default BookThumbnail;
