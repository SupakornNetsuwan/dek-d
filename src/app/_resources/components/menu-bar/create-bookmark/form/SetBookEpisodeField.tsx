import React from "react";
import { Button } from "@/core/components/ui/button";
import useBookListAtom from "@/core/hooks/useBookListAtom";
import { Controller, useFormContext } from "react-hook-form";
import { CreateBookMarkSchemaType } from "@/core/entities/bookmark.entity";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/form";
const SetBookEpisodeField = () => {
  const { control, watch } = useFormContext<CreateBookMarkSchemaType>();
//   console.log(watch("book.episodes"));
  return (
    <FormField
      control={control}
      name="book"
      render={({ field }) => {
        console.log(JSON.stringify(field.value.episodes))
        return (
        <FormItem>
          <FormControl>
            <div className="grid grid-cols-2 rounded-md border bg-white p-2">
              
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}}
    />
  );
};

export default SetBookEpisodeField;
