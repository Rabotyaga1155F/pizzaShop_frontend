"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import galka from "@/assets/images/galka.png";
import Link from "next/link";
import axios from "axios";
import { IOrder, IOrderWithId } from "@/types/order.types";

const MainOrderInfo = () => {
  const [orderData, setOrderData] = useState<IOrderWithId | null>(null);

  useEffect(() => {
    axios
      .get<IOrderWithId>(
        `https://localhost:7217/api/Order/GetLastOrder/${localStorage.getItem("userId")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        setOrderData(res.data);
      });
  }, []);

  return (
    <>
      {orderData && (
        <div
          className={
            "bg-gradient-to-tr from-[#C32B86] to-[#7EA0B7] h-screen w-screen flex items-center justify-center"
          }
        >
          <div
            className={"w-[650px] h-[600px] rounded-3xl bg-white border-8  "}
          >
            <Image className={"w-8 h-8 mx-auto my-4"} src={galka} alt={""} />
            <h1
              className={
                "text-center text-[#C32B86] font-bold text-[24px] mt-2"
              }
            >
              Заказ завершен!
            </h1>
            <div className={"flex justify-around py-4"}>
              <h3 className={"text-[#C32B86] font-bold"}>
                Номер заказа:{" "}
                <span className={"text-black"}>{orderData.orderId}</span>
              </h3>
              <h3 className={"text-[#C32B86] font-bold"}>
                Дата заказа:{" "}
                <span className={"text-black"}>
                  {new Date(orderData.orderDate).toLocaleDateString()}
                </span>
              </h3>
            </div>
            <section className={"mx-4"}>
              <div className="flex justify-between">
                <div className="flex-col items-center">
                  <h4 className="text-[16px] text-[#C32B86] font-medium">
                    Номер телефона
                  </h4>
                  <h5 className="text-[13px] font-semibold">
                    {orderData.phoneNumber}
                  </h5>
                </div>

                <div className="flex-col items-center">
                  <h4 className="text-[16px] text-[#C32B86] font-medium">
                    Email
                  </h4>
                  <h5 className="text-[13px] font-semibold">
                    {orderData.email}
                  </h5>
                </div>

                <div className="flex-col items-center">
                  <h4 className="text-[16px] text-[#C32B86] font-medium">
                    Имя
                  </h4>
                  <h5 className="text-[13px] font-semibold">
                    {orderData.userName}
                  </h5>
                </div>
              </div>

              <h1 className={" text-[#C32B86] font-bold text-[24px] mt-12"}>
                Детали доставки
              </h1>
              <div className={"flex flex-col gap-3 mt-4"}>
                <div className={"flex justify-between "}>
                  <h4 className="font-semibold">Адрес</h4>
                  <h4 className="text-[16px] text-[#C32B86] font-medium">
                    {orderData.address}
                  </h4>
                </div>
                <div className={"flex justify-between"}>
                  <h4 className="font-semibold">Квартира</h4>
                  <h4 className="text-[16px] text-[#C32B86] font-medium">
                    {orderData.apartment}
                  </h4>
                </div>
                <div className={"flex justify-between"}>
                  <h4 className=" font-semibold">Этаж</h4>
                  <h4 className="text-[16px] text-[#C32B86] font-medium">
                    {orderData.floor}
                  </h4>
                </div>
                <div className={"flex justify-between"}>
                  <h4 className=" font-semibold">Итого к оплаты</h4>
                  <h4 className="text-[16px] text-[#C32B86] font-medium">
                    {orderData.paymentType}
                  </h4>
                </div>
              </div>
              <div className={"border-b-2 border-dashed my-8"} />

              <div className={"flex justify-between"}>
                <h4 className=" font-semibold">Итого к оплате</h4>
                <h4 className="text-[16px] text-[#C32B86] font-medium">
                  {orderData.totalPrice}
                </h4>
              </div>
              <Link href={"/catalog/menu"}>
                <h2
                  className={
                    "text-center text-gray-400 text-[12px] font-semibold"
                  }
                >
                  Вернуться на главную
                </h2>
              </Link>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default MainOrderInfo;
