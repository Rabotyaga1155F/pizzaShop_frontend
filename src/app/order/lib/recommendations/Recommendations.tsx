import React from "react";
import RecommendationsItem from "@/app/order/lib/recommendations/recommendations-item/RecommendationsItem";
import { useGetAllProductsQuery } from "@/store/product/product-api";
import { images } from "@/app/catalog/menu/lib/products/Products";

const Recommendations = () => {
  const accessToken = localStorage.getItem("accessToken");
  const { data, error, isLoading } = useGetAllProductsQuery(accessToken || "");
  return (
    <div className={"mx-[200px] pt-12"}>
      <div className={"shadow bg-white rounded-3xl"}>
        <div className={"flex items-center px-16 pt-8 justify-between"}>
          <h1 className={" font-bold text-[18px] text-[#70544F]"}>
            Рекомендуем к вашему заказу
          </h1>
        </div>
        <div className={"flex items-center justify-around mx-12 mt-6 pb-12"}>
          {data &&
            data
              // .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((pizza, index) => (
                <RecommendationsItem
                  key={pizza.pizzaId}
                  pizzaName={pizza.pizzaName}
                  pizzaPrice={pizza.pizzaPrice}
                  image={images[pizza.image]}
                  pizzaId={pizza.pizzaId}
                  pizzaDescription={pizza.pizzaDescription}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
