import React, { FC, useState } from "react";
import { IFieldProps } from "@/components/ui/fields/field/field.types";

const Field: FC<IFieldProps> = ({ title, placeholder, register }) => {
  return (
    <div>
      <h3 className={"text-gray-400 pb-3 pt-5"}>{title}</h3>
      <div className={"flex items-center"}>
        <input
          {...register}
          className={"bg-[#F8F8F8] pl-6 pr-48 py-4 rounded-xl focus:outline-0"}
          type="text"
          placeholder={placeholder ? placeholder : ""}
        />
      </div>
    </div>
  );
};

export default Field;
