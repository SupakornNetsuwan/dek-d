import React, { useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createBookMarkSchema,
  type CreateBookMarkSchemaType,
} from "@/core/entities/bookmark.entity";
import useBookListStorageAtom from "@/core/hooks/useBookListAtom";

const CreateBookMarkProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [bookList, setBookList] = useBookListStorageAtom();
  const methods = useForm<CreateBookMarkSchemaType>({
    resolver: zodResolver(createBookMarkSchema),
    defaultValues: {
      book: bookList.at(0),
    },
  });

  const handleSubmit: SubmitHandler<CreateBookMarkSchemaType> = (data) => {
    // จำลองว่า POST Request ไปสร้างรายการใหม่ที่ Back-end side
    
  };

  // Debug for form error state
  useEffect(() => {
    if(methods.formState.errors) console.log("ERROR :", methods.formState.errors);
  }, [methods.formState.errors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CreateBookMarkProvider;
