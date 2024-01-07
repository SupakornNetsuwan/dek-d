import React, { useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createBookMarkSchema,
  type CreateBookMarkSchemaType,
} from "@/core/entities/bookmark.entity";

const CreateBookMarkProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const methods = useForm<CreateBookMarkSchemaType>({
    resolver: zodResolver(createBookMarkSchema),
  });

  const handleSubmit: SubmitHandler<CreateBookMarkSchemaType> = (data) => {};

  // Debug for form error state
  useEffect(() => {
    console.log(methods.formState.errors);
  }, [methods.formState.errors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CreateBookMarkProvider;
