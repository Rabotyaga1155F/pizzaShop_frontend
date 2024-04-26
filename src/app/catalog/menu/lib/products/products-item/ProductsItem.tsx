import React, { FC, useEffect } from "react";
import Image from "next/image";

import { useActions, useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { IPizza } from "@/types/pizza.types";

const ProductsItem: FC<IPizza> = ({
  pizzaId,
  pizzaName,
  pizzaDescription,
  pizzaPrice,
  image,
}) => {
  const { addItem, removeItem } = useActions();

  const { cart } = useAppSelector((state) => state);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const isExistInCart = cart.some((p) => p.pizzaId === pizzaId);

  return (
    <div className={"w-[270px] mx-3 mt-6"}>
      <Image
        width={270}
        height={270}
        className={
          "w-[220px] h-[220px] mx-auto hover:-translate-y-2 transition ease-in-out"
        }
        src={image}
        alt={""}
      />
      <h3 className={"font-medium text-[20px] mt-5"}>{pizzaName}</h3>
      <p className={"text-[13px] text-gray-500 mt-1"}>{pizzaDescription}</p>
      <div className="flex items-center justify-between mt-5">
        <h3 className={"font-medium text-[20px]"}>{pizzaPrice} ₽</h3>
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

export default ProductsItem;
