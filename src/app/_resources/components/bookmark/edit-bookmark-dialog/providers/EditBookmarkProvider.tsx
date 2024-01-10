import React, { useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createBookmarkSchema,
  type CreateBookmarkSchemaType,
} from "@/core/entities/bookmark.entity";
import { useToast } from "@components/use-toast";
import useBookmarkStorageAtom from "@/core/hooks/useBookmarkStorageAtom";
import { randomString } from "@/core/lib/utils";

const EditBookmarkProvider: React.FC<
  React.PropsWithChildren & { closeDialog: () => void; bookmarkId: string }
> = ({ children, closeDialog, bookmarkId }) => {
  const { toast } = useToast();
  const { getBookmark } = useBookmarkStorageAtom();
  const targetBookmark = getBookmark(bookmarkId);

  const methods = useForm<CreateBookmarkSchemaType>({
    resolver: zodResolver(createBookmarkSchema),
    defaultValues: {
      id: targetBookmark.id,
      book: targetBookmark.book,
      flaggedEpisode: targetBookmark.flaggedEpisode,
      createdAt: new Date(targetBookmark.createdAt),
    },
  });

  const handleSubmit: SubmitHandler<CreateBookmarkSchemaType> = (data) => {
    // จำลองว่า POST Request ไปสร้างรายการใหม่ที่ Back-end side
    const now = new Date();

    toast({
      title: "แก้ไขที่คั่นแล้ว",
      description: `ที่คั่นสำหรับเรื่อง ${data.book.name} ถูกแก้ไขแล้ว`,
    });

    closeDialog();
  };

  // Debug for form error state
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && methods.formState.errors)
      console.log("ERROR :", methods.formState.errors);
  }, [methods.formState.errors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default EditBookmarkProvider;
