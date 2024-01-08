import React, { useEffect } from "react";
import useBookListStorageAtom from "@/core/hooks/useBookListAtom";
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

const SetBookField = () => {
  const [bookList] = useBookListStorageAtom();
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
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <div className="flex max-h-[20dvh] flex-col gap-2 overflow-y-auto rounded-md border bg-white p-2 lg:max-h-none lg:flex-row lg:flex-wrap">
              {bookList.map((book) => {
                return (
                  <CheckButton
                    key={book.id}
                    name={name}
                    isSelected={value.name === book.name}
                    onClick={() => setBook(book)}
                  >
                    {book.name}
                  </CheckButton>
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
