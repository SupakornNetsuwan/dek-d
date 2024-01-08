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
import SetBookEpisodeField from "./SetBookEpisodeField";

const CreateBookMarkForm = () => {
  const { control, watch, getValues } =
    useFormContext<CreateBookMarkSchemaType>();
  watch;
  return (
    <div className="flex  flex-col gap-y-4">
      <SetBookField />
      <SetBookEpisodeField />

      <Button className="self-end" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default CreateBookMarkForm;
