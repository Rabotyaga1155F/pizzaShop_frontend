import React, { FC, useState } from "react";
import { IContactsFieldTypes } from "@/components/ui/fields/contacts-field/contacts-field.types";

const ContactsField: FC<IContactsFieldTypes> = ({
  title,
  placeholder,
  register,
}) => {
  return (
    <div className={"mx-24"}>
      <h3 className={"text-black pb-3 pt-5"}>{title}</h3>
      <div className={"flex items-center"}>
        <input
          {...register}
          className={
            "bg-[#F8F8F8] pl-6 w-full py-5  focus:outline-0 border border-[#B14892]"
          }
          type="text"
          placeholder={placeholder ? placeholder : ""}
        />
      </div>
    </div>
  );
};

export default ContactsField;
