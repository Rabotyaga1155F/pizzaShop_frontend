import React, { useState } from "react";
import Field from "@/components/ui/fields/field/Field";
import NumberField from "@/components/ui/fields/number-field/NumberField";
import CustomRadio from "@/components/ui/custom-radio/CustomRadio";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IOrder } from "@/types/order.types";
import { useAppSelector } from "@/hooks/storeHooks";

const DeliveryContacts = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const cart = useAppSelector((state) => state.cart);

  const { handleSubmit, reset, register } = useForm();

  const router = useRouter();
  const handleSelect = (title: string) => {
    setSelectedOption(title);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(onSubmitForm)();
  };

  const onSubmitForm = (data: any) => {
    const requestData = {
      userId: localStorage.getItem("userId"),
      orderDate: new Date(),
      totalPrice: cart.reduce((acc, item) => acc + item.pizzaPrice, 0),
      userName: data.UserName,
      email: data.Email,
      phoneNumber: `+7${data.PhoneNumber}`,
      address: data.Address,
      apartment: data.Apartment,
      floor: data.Floor,
      paymentType: selectedOption,
      orderComment: data.OrderComment,
      orderStatus: "Заказ создан",
    };

    axios
      .post("https://localhost:7217/api/Order", requestData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        reset();
        router.push("/order/successful");
      });
  };

  return (
    <div className={"mx-[200px] pt-12"}>
      <div className={"shadow bg-white rounded-3xl px-16"}>
        <div className={"flex items-center  pt-8 justify-between"}>
          <h1 className={" font-bold text-[18px] text-[#70544F]"}>
            Ваши контакты
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Field
            title={"Имя"}
            placeholder={"Введите имя"}
            register={register("UserName", { required: true })}
          />
          <Field
            title={"E-mail"}
            placeholder={"example@mail.com"}
            register={register("Email", { required: true })}
          />
          <NumberField register={register("PhoneNumber", { required: true })} />
          <div className={"flex items-center justify-between"}>
            <div>
              <h3 className={"text-gray-400 pb-3 pt-5"}>Введите адрес</h3>
              <div className={"flex items-center"}>
                <input
                  {...register("Address", { required: true })}
                  className={
                    "bg-[#F8F8F8] pl-6 pr-48 py-4 rounded-xl focus:outline-0"
                  }
                  type="text"
                  placeholder="Адрес"
                />
              </div>
            </div>
            <div>
              <h3 className={"text-gray-400 pb-3 pt-5"}>&nbsp;</h3>
              <div className={"flex items-center"}>
                <input
                  {...register("Apartment", { required: true })}
                  className={
                    "bg-[#F8F8F8] pl-6 pr-16 py-4 rounded-xl focus:outline-0"
                  }
                  type="text"
                  placeholder="Квартира"
                />
              </div>
            </div>
            <div>
              <h3 className={"text-gray-400 pb-3 pt-5"}>&nbsp;</h3>
              <div className={"flex items-center"}>
                <input
                  {...register("Floor", { required: true })}
                  className={
                    "bg-[#F8F8F8] pl-6 pr-16 py-4 rounded-xl focus:outline-0"
                  }
                  type="text"
                  placeholder="Этаж"
                />
              </div>
            </div>
          </div>

          <h1 className={" font-bold text-[18px] text-[#70544F] mt-6"}>
            Оплата
          </h1>
          <div className={"flex gap-5 mt-6"}>
            <CustomRadio
              title={"Наличными"}
              selected={selectedOption === "Наличными"}
              onSelect={handleSelect}
            />
            <CustomRadio
              title={"Картой курьеру"}
              selected={selectedOption === "Картой курьеру"}
              onSelect={handleSelect}
            />
            <CustomRadio
              title={"Картой"}
              selected={selectedOption === "Картой"}
              onSelect={handleSelect}
            />
          </div>
          <div className="mt-6 pb-8">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleAccordion}
            >
              <h1 className="font-bold text-[18px] text-[#70544F]">
                Комментарий к заказу для курьера
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform transform ${
                  isAccordionOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isAccordionOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
                />
              </svg>
            </div>
            {isAccordionOpen && (
              <div className="p-6">
                <textarea
                  {...register("OrderComment")}
                  className="w-full h-40 resize-y border"
                  placeholder="Введите ваш комментарий..."
                ></textarea>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className={"flex justify-end"}>
        <button
          onClick={handleClick}
          className={
            "bg-[#50A684] rounded-full  cursor-pointer mt-6 mb-24 transform hover:scale-105 transition-transform duration-300"
          }
        >
          <h1 className={"text-white font-semibold py-3 px-4 "}>
            Оформить заказ
          </h1>
        </button>
      </div>
    </div>
  );
};

export default DeliveryContacts;
