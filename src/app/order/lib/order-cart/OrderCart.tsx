import React, { useState } from "react";

import corz from "@/assets/images/corzi.png";
import arrow from "@/assets/images/arrow.png";

import Image from "next/image";
import OrderCartItem from "@/app/order/lib/order-cart/order-cart-item/OrderCartItem";
import { useActions, useAppSelector } from "@/hooks/storeHooks";
import { useRouter } from "next/navigation";
import axios from "axios";

const OrderCart = () => {
  const accessToken = localStorage.getItem("accessToken");

  const [promocode, setPromocode] = useState("");
  const [sell, setSell] = useState(0);
  const cart = useAppSelector((state) => state.cart);

  const router = useRouter();

  const { deleteAllItems } = useActions();

  const fetch = () => {
    axios
      .get(`https://localhost:7217/api/Promocodes/${promocode}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setSell(res.data);
      });
  };

  return (
    <div className={"mx-[200px] pt-12"}>
      <div className={"shadow bg-white rounded-3xl"}>
        <div className={"flex items-center px-16 pt-16 justify-between"}>
          <h1 className={" font-bold text-[18px] text-[#70544F]"}>
            Корзина<span className={"text-[#007A53]"}> ({cart.length})</span>
          </h1>
          <button
            onClick={() => {
              deleteAllItems();
              router.push("/catalog/menu");
            }}
            className={"flex items-center gap-3"}
          >
            <h2
              className={
                "text-gray-700 text-[14px] hover:text-red-600 transition-all duration-150 ease-in-out"
              }
            >
              Удалить всё
            </h2>
            <Image className={"h-4 w-4"} src={corz} alt={""} />
          </button>
        </div>

        <div className={"border-b-2 border-gray-200 my-4 mx-16"}></div>

        {cart.map((item) => (
          <>
            <OrderCartItem
              key={item.pizzaId}
              image={item.image}
              description={item.pizzaDescription}
              price={item.pizzaPrice}
              name={item.pizzaName}
              id={item.pizzaId}
            />
            <div className={"border-b-2 border-gray-200 my-4 mx-16"}></div>
          </>
        ))}

        <h2 className={" mx-16 text-gray-400 font-bold text-[18px] text-right"}>
          Итого:{" "}
          {sell === 0 ? (
            <span className={"text-[#007A53]"}>
              {cart.reduce((acc, item) => acc + item.pizzaPrice, 0)} ₽
            </span>
          ) : (
            <>
              <s>
                <span className={"text-[#007A53]"}>
                  {cart.reduce((acc, item) => acc + item.pizzaPrice, 0)} ₽
                </span>
              </s>
              <span className={"text-[#007A53] pl-3"}>
                {cart.reduce((acc, item) => acc + item.pizzaPrice, 0) *
                  (1 - sell / 100)}{" "}
                ₽
              </span>
              <p>
                Промокод {promocode} - скидка - {sell}%
              </p>
            </>
          )}
        </h2>

        <div className={"mx-16 flex items-center"}>
          <input
            readOnly={sell !== 0}
            onChange={(event) => {
              setPromocode(event.target.value);
            }}
            className={
              "bg-[#F8F8F8] mb-12  placeholder:text-[#BFB7B6] font-semibold text-[14px] py-3 pl-5 pr-[60px] rounded-2xl focus:outline-[#007A53]"
            }
            type={"text"}
            placeholder={"Ввести промокод"}
          />
          <button
            onClick={fetch}
            className={
              "w-9 h-9 mb-12 rounded-full bg-[#BFB7B6] absolute ml-52 flex justify-center hover:bg-[#007A53] transition-all duration-150 ease-in-out"
            }
          >
            <Image className={"h-4 w-4 my-auto"} src={arrow} alt={""} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
