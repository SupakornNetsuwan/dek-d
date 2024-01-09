import React, { useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Bookmark, {
  createBookmarkSchema,
  type CreateBookmarkSchemaType,
} from "@/core/entities/bookmark.entity";
import { useToast } from "@components/use-toast";
import useBookStorageAtom from "@/core/hooks/useBookStorageAtom";
import useBookmarkStorageAtom from "@/core/hooks/useBookmarkStorageAtom";
import { randomString } from "@/core/lib/utils";

const CreateBookMarkProvider: React.FC<
  React.PropsWithChildren & { closeDialog: () => void }
> = ({ children, closeDialog }) => {
  const { toast } = useToast();
  const [bookStorage] = useBookStorageAtom();
  const { addBookmark } = useBookmarkStorageAtom();
  const methods = useForm<CreateBookmarkSchemaType>({
    resolver: zodResolver(createBookmarkSchema),
    defaultValues: {
      id: randomString(10),
      book: bookStorage.at(0),
    },
  });

  const handleSubmit: SubmitHandler<CreateBookmarkSchemaType> = (data) => {
    // จำลองว่า POST Request ไปสร้างรายการใหม่ที่ Back-end side
    const now = new Date();
    addBookmark(
      new Bookmark({
        id: data.id,
        book: data.book,
        flaggedEpisode: data.flaggedEpisode,
        createdAt: now,
        updatedAt: now,
      }),
    );

    methods.setValue("id", randomString(10)); // Recreate ID ใหม่เนื่องจากเป็นการ Mockup ทุกอย่างที่ฝั่ง client side
    toast({
      title: "สร้างที่คั่นแล้ว 🎉",
      description: `ที่คั่นสำหรับเรื่อง ${data.book.name} ถูกเพิ่มเข้าคลังแล้ว`,
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

export default CreateBookMarkProvider;
