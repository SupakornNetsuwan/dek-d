import React, { use, useEffect } from "react";
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
import { Button } from "@components/button";
import { Input } from "@components/input";
import useBookListAtom from "@/core/hooks/useBookListAtom";

const CreateBookMarkForm = () => {
  const [bookList] = useBookListAtom();
  const { control, watch } = useFormContext<CreateBookMarkSchemaType>();

  console.log(watch())

  return (
    <div className="flex  flex-col gap-y-4">
      <FormField
        control={control}
        name="book"
        render={({ field: { onChange, ...field } }) => (
          <FormItem>
            <FormControl>
              <div className="flex flex-wrap gap-2 rounded-md border bg-white p-2">
                {bookList.map((book) => {
                  const setBook = () => {
                    onChange({ x: "x" });
                  };

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

      {/* <FormField
        control={control}
        name="book"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ผู้แต่ง</FormLabel>
            <FormControl>
              <Input placeholder="ชื่อ" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> */}

      <Button className="self-end" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default CreateBookMarkForm;
