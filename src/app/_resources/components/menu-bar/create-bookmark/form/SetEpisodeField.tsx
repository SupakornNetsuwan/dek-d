import React, { useEffect } from "react";
import { Button } from "@/core/components/ui/button";
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
import CheckButton from "./CheckButton";

const SetEpisodeField = () => {
  const { control, watch } = useFormContext<CreateBookMarkSchemaType>();

  const bookField = watch("book");
  const flaggedEpisodeField = watch("flaggedEpisode");

  if (!flaggedEpisodeField) {
    return null;
  }
  return (
    <FormField
      name="flaggedEpisode"
      control={control}
      render={({ field: { value, onChange: setEpisode, name } }) => (
        <FormItem>
          <FormLabel>ตอนที่ต้องการคั่น</FormLabel>
          <FormControl>
            <div className="flex max-h-[20dvh] flex-col gap-2 overflow-y-auto rounded-md border bg-white p-2 lg:max-h-none lg:flex-row lg:flex-wrap">
              {bookField.episodes.map((episode) => {
                return (
                  <CheckButton
                    key={episode.nth}
                    name={name}
                    isSelected={value.name === episode.name}
                    onClick={() => setEpisode(episode)}
                  >
                    ตอนที่ {episode.nth} ({episode.name})
                  </CheckButton>
                );
              })}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default SetEpisodeField;
