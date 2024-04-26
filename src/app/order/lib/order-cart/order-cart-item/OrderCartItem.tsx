import React, { FC, useEffect } from "react";
import Image from "next/image";

import krest from "@/assets/images/krest.png";
import { IOrderCartItemProps } from "@/app/order/lib/order-cart/order-cart-item/order-cart-item.types";
import { useActions, useAppSelector } from "@/hooks/storeHooks";

const OrderCartItem: FC<IOrderCartItemProps> = ({
  image,
  id,
  name,
  price,
  description,
}) => {
  const { removeItem } = useActions();

  return (
    <div className={"mx-16 flex items-center py-4 "}>
      <Image className={"w-24 "} src={image} alt={""} />
      <div className={"flex flex-col justify-center pl-4 gap-2"}>
        <h3 className={"font-bold text-[#70544F] text-[17px]"}>{name}</h3>
        <h4 className={"text-[12px] text-[#70544F]"}>
          Средняя 30 см, традиционное тесто 30
        </h4>
      </div>
      <div className={"flex items-center absolute right-[260px]"}>
        <h3 className={"font-bold text-[#007A53]"}>{price} ₽</h3>
        <button
          onClick={() => {
            removeItem({ id });
          }}
          className={"pl-10"}
        >
          <Image className={"w-6 h-6"} src={krest} alt={""} />
        </button>
      </div>
    </div>
  );
};

export default OrderCartItem;
