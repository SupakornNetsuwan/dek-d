import React from "react";
import { Button } from "@components/button";
import SetBookField from "./SetBookField";
import SetEpisodeField from "./SetEpisodeField";

const CreateBookMarkForm = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <SetBookField />
      <SetEpisodeField />
      <Button className="self-end">สร้าง</Button>
    </div>
  );
};

export default CreateBookMarkForm;
