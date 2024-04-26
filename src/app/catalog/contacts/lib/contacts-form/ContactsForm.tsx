"use client";
import React, { FC, useEffect, useState } from "react";
import ContactsField from "@/components/ui/fields/contacts-field/ContactsField";
import { useForm } from "react-hook-form";
import axios from "axios";
import SuccessNotification from "@/components/ui/success-notification/SuccessNotification";

const ContactsForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  }, [formSubmitted]);

  const onSubmit = (data: any) => {
    axios
      .post(
        "https://localhost:7217/api/Review",
        {
          ...data,
          reviewStatus: "Рассматривается",
          reviewDate: new Date(),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        },
      )
      .then((response) => {
        reset();
        setFormSubmitted(true);
        alert("Форма отправлена");
      });
  };

  return (
    <>
      {formSubmitted && (
        <SuccessNotification>Форма отправлена успешно</SuccessNotification>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <ContactsField
          title={"Меня зовут:"}
          placeholder={"Имя"}
          register={register("UserName", { required: true })}
        />
        <ContactsField
          title={"Мой город:"}
          placeholder={"Екатеринбург"}
          register={register("City", { required: true })}
        />
        <ContactsField
          title={"Мой телефон:"}
          placeholder={"+7900000000"}
          register={register("PhoneNumber", { required: true })}
        />
        <ContactsField
          title={"Моя почта:"}
          placeholder={"mail@example.ru"}
          register={register("Email", { required: true })}
        />
        <ContactsField
          title={"Комментарий:"}
          register={register("Comment", { required: true })}
        />

        <div className={"pb-24"}>
          <button
            type={"submit"}
            className={
              "block mx-auto  bg-[#C32B86] px-12 py-4 mt-24 text-white font-bold rounded-full "
            }
          >
            Отправить
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactsForm;
