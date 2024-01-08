import React from "react";
import { Button } from "@/core/components/ui/button";
import useBookListAtom from "@/core/hooks/useBookListAtom";
import { useFormContext } from "react-hook-form";
import { CreateBookMarkSchemaType } from "@/core/entities/bookmark.entity";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/form";

const SetBookField = () => {
  const [bookList] = useBookListAtom();
  const { control } = useFormContext<CreateBookMarkSchemaType>();

  return (
    <FormField
      control={control}
      name="book"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex flex-wrap gap-2 rounded-md border bg-white p-2">
              {bookList.map((book) => {
                const setBook = () => field.onChange(book);

                return (
                  <Button
                    onClick={setBook}
                    key={book.id}
                    variant="secondary"
                    className=""
                  >
                    <span>{book.name}</span>
                  </Button>
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
