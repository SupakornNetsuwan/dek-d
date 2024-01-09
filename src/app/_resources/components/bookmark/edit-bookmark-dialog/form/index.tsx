import React from "react";
import { Button } from "@components/button";
import SetEpisodeField from "../../../menu-bar/create-bookmark-dialog/form/SetEpisodeField";
import BookThumbnail from "./BookThumbnail";

const EditBookMarkForm = () => {
  
  return (
    <div className="flex flex-col gap-y-4">
      <BookThumbnail />
      <SetEpisodeField />
      <Button className="self-end">แก้ไข</Button>
    </div>
  );
};

export default EditBookMarkForm;
