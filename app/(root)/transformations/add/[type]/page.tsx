import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  const { type } = await params; // ✅ Await the promise
  const transformation = transformationTypes[type];

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    </>
  );
};

export default AddTransformationTypePage;
