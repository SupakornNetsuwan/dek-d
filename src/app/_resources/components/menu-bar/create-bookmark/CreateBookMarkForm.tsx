import React from "react";
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

const CreateBookMarkForm = () => {
  
  const { control } = useFormContext<CreateBookMarkSchemaType>();

  return (
    <div>
      <FormField
        control={control}
        name="author"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ผู้แต่ง</FormLabel>
            <FormControl>
              <Input placeholder="ชื่อ" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default CreateBookMarkForm;
