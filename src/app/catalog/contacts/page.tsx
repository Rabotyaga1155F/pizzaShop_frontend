"use client";
import React, { FC } from "react";
import ContactsForm from "@/app/catalog/contacts/lib/contacts-form/ContactsForm";
import useAccessToken from "@/hooks/useAccessToken";
const Contacts: FC = () => {
  useAccessToken();
  return (
    <div className={"flex-1 min-h-screen bg-[#FCF9ED]"}>
      <div className={"pt-[100px] mx-auto max-w-screen-lg"}>
        <h2 className={"font-bold text-2xl pt-14 text-center"}>
          Срочный вопрос?
        </h2>
        <h2 className={"font-bold text-2xl pt-4 text-center"}>
          Звони на горячую линию:
        </h2>
        <h1 className={"font-bold text-7xl pt-14 text-center text-red-600"}>
          +7 (900) 000-00-00
        </h1>

        <h2 className={"font-bold text-4xl  text-center pt-24"}>
          Есть замечания или предложения?
        </h2>
        <h2 className={"font-bold text-4xl pt-4 text-center"}>
          Заполни анкету:
        </h2>
        <h2 className={"font-light text-2xl pt-6 text-center"}>
          Ответим в течение суток
        </h2>
        <ContactsForm />
      </div>
    </div>
  );
};

export default Contacts;
