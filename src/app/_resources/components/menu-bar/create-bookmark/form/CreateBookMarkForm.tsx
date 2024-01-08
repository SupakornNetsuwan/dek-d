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
import SetBookField from "./SetBookField";
import SetEpisodeField from "./SetEpisodeField";

const CreateBookMarkForm = () => {
  const { watch } = useFormContext<CreateBookMarkSchemaType>();

  console.log(watch());

  return (
    <div className="flex  flex-col gap-y-4">
      <SetBookField />
      <SetEpisodeField />
      <Button className="self-end">
        Submit
      </Button>
    </div>
  );
};

export default CreateBookMarkForm;
