import React, { useEffect } from "react";
import useBookStorageAtom from "@/core/hooks/useBookStorageAtom";
import { useFormContext, useWatch } from "react-hook-form";
import { CreateBookMarkSchemaType } from "@/core/entities/bookmark.entity";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/form";
import CheckButton from "./CheckButton";
import { Book } from "lucide-react";
import { cn } from "@/core/lib/utils";
import Image from "next/image";
import bookCover from "@public/bookmark-thumbnail.jpg";

const SetBookField = () => {
  const [bookList] = useBookStorageAtom();
  const { control, watch, setValue } =
    useFormContext<CreateBookMarkSchemaType>();
  const bookFieldWatch = watch("book");

  // Reactive select of first episode of novel after change the book
  useEffect(() => {
    if (bookFieldWatch.episodes) {
      setValue("flaggedEpisode", bookFieldWatch.episodes[0]);
    }
  }, [bookFieldWatch, setValue]);

  return (
    <FormField
      name="book"
      control={control}
      render={({ field: { value, onChange: setBook, name } }) => (
        <FormItem>
          <FormLabel>เลือกหนังสือ</FormLabel>
          <FormControl>
            <div className="grid max-h-[50dvh] grid-cols-2 gap-2 overflow-y-auto rounded-md border bg-white p-2 sm:max-h-none sm:grid-cols-3">
              {bookList.map((book) => {
                const isSelected = value.name === book.name;
                return (
                  <div
                    key={book.id}
                    onClick={() => setBook(book)}
                    className={cn(
                      "group flex cursor-pointer flex-col items-center gap-y-2 rounded-md border border-transparent bg-slate-50 p-4 hover:bg-slate-100",
                      isSelected &&
                        "border-orange-500 bg-orange-50 hover:bg-orange-50 ",
                    )}
                  >
                    <Image
                      src={bookCover}
                      alt="book_cover"
                      className="w-28 rounded-md"
                    />
                    <CheckButton
                      name={name}
                      isSelected={isSelected}
                      onClick={() => setBook(book)}
                      className={cn(
                        "h-auto border-none bg-slate-50 py-0 group-hover:bg-slate-100 max-w-full truncate whitespace-pre-line",
                        isSelected && "bg-orange-50 group-hover:bg-orange-50",
                      )}
                    >
                      {book.name}
                    </CheckButton>
                  </div>
                );
              })}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SetBookField;
