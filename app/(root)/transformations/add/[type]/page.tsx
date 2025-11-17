import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  const { type } = await params;
   const { userId } =  await auth();
 // ✅ Await the promise
  const transformation = transformationTypes[type];

  const user = await getUserById(userId)
  if(!userId) redirect('/sign-in')

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
        
        <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as 
          TransformationTypeKey
        }
        creditBalance={user.creditBalance}
         />



    </>
  );
};

export default AddTransformationTypePage;
