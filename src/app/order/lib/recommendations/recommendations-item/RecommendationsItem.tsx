import React, { FC, useEffect } from "react";
import { useGetAllProductsQuery } from "@/store/product/product-api";
import { useActions, useAppSelector } from "@/hooks/storeHooks";
import Image from "next/image";

import img from "@/assets/images/pizzas/pesto.png";
import plus from "@/assets/images/icons8-plus-144.png";
import { IPizza } from "@/types/pizza.types";

const RecommendationsItem: FC<IPizza> = ({
  pizzaId,
  pizzaDescription,
  pizzaName,
  pizzaPrice,
  image,
}) => {
  const { addItem } = useActions();

  return (
    <div className={""}>
      <div className={"flex items-center"}>
        <div className={"flex border-4 border-gray-100 py-6 px-3 rounded-lg "}>
          <Image className={"h-20 w-20"} src={image} alt={""} />
          <div className={"flex flex-col pl-6 gap-2 "}>
            <h2 className={"font-semibold text-[#70544F]"}>{pizzaName}</h2>

            <h3 className={"text-[#70544F] font-medium text-[13px]"}>
              Традиционное тесто, 30 см
            </h3>

            <h2 className={"text-[#007A53] font-bold"}>{pizzaPrice} ₽</h2>
            <button
              onClick={() => {
                addItem({
                  pizzaId,
                  pizzaDescription,
                  pizzaName,
                  pizzaPrice,
                  image,
                });
              }}
              className={
                "w-9 h-9 mt-16 ml-32 rounded-full bg-[#007A53] absolute  flex justify-center hover:bg-green-800 transition-all duration-150 ease-in-out"
              }
            >
              <Image className={"h-4 w-4 my-auto "} src={plus} alt={""} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsItem;
