import React, { FC } from "react";
import krest from "@/assets/images/krest.png";
import Image from "next/image";
import { ICartItemProps } from "@/components/ui/cart/cart-item/cart-item.types";
import { useActions } from "@/hooks/storeHooks";

const CartItem: FC<ICartItemProps> = ({
  name,
  price,
  image,
  description,
  id,
}) => {
  const { removeItem } = useActions();

  return (
    <div className={"bg-white"}>
      <div className={"flex items-center w-full mx-4 mt-6 pt-2"}>
        <Image className={"w-14 "} src={image} alt={""} />
        <div className={"ml-4"}>
          <h2 className={"font-semibold text-[16px]"}>{name}</h2>
          <p className={"text-gray-500 text-[12px] font-medium"}>
            Средняя 30 см, традиционное тесто 30
          </p>
        </div>

        <button
          onClick={() => {
            removeItem({ id });
          }}
          className={"absolute right-3 "}
        >
          <Image className={"w-8 "} src={krest} alt={""} />
        </button>
      </div>
      <div className={"mx-4 border-b mt-2 border-gray-300 h-1"}></div>
      <p className={"ml-4  font-bold py-3"}>
        {price} <span className={"font-normal"}>₽</span>
      </p>
    </div>
  );
};

export default CartItem;
