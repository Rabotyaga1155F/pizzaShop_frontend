import React, { FC } from "react";
import Image from "next/image";

import { BestPizzasCartProps } from "@/app/catalog/lib/best-sellers/best-pizzas-item/best-pizzas-item.types";
import { useActions, useAppSelector } from "@/hooks/storeHooks";
import { IPizza } from "@/types/pizza.types";

const BestPizzasItem: FC<IPizza> = ({
  pizzaId,
  pizzaPrice,
  pizzaDescription,
  pizzaName,
  image,
}) => {
  const { addItem, removeItem } = useActions();

  const { cart } = useAppSelector((state) => state);

  const isExistInCart = cart.some((p) => p.pizzaId === pizzaId);

  return (
    <div className={"bg-white w-[260px] rounded-[12px] shadow-2xl"}>
      <Image className={"w-36 h-36 mx-auto mt-8"} src={image} alt={""} />
      <h2 className={"font-bold text-[20px] text-center mt-2"}>{pizzaName}</h2>
      <h2 className={"font-bold text-red-600 text-[20px] text-center mt-2"}>
        ₽ {pizzaPrice}.00
      </h2>
      <div className={"flex justify-center mt-4 pb-4"}>
        <button
          onClick={() =>
            addItem({
              pizzaId: pizzaId,
              pizzaName: pizzaName,
              image: image,
              pizzaPrice: pizzaPrice,
              pizzaDescription: pizzaDescription,
            })
          }
          className={"text-white text-[13px] bg-red-600 rounded-full px-4 py-2"}
        >
          {isExistInCart ? "In cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default BestPizzasItem;
