import React, { useEffect, useState } from "react";

import { IPizza } from "@/types/pizza.types";
import axios from "axios";

import BestPizzasItem from "@/app/catalog/menu/lib/best-sellers/best-pizzas-item/BestPizzasItem";
import { images } from "@/app/catalog/menu/lib/products/Products";

const BestSellers = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get("https://localhost:7217/api/Pizzas", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(
        (response) => {
          setPizzas(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        },
      );
  }, []);

  return (
    <div className={"bg-[#FCF9ED] pt-24"}>
      <div className={"mx-16 flex "}>
        <div className={"w-1/5"}>
          <h3 className={"text-5xl font-bold"}>Our best sellers</h3>
          <h4 className={"text-[16px] font-semibold text-gray-500 mt-5"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nesciunt
          </h4>
        </div>

        <div className={"flex justify-between gap-7"}>
          {pizzas
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((pizza, index) => (
              <BestPizzasItem
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

export default BestSellers;
