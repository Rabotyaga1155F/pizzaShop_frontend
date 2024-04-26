import React, { useEffect, useState } from "react";
import axios from "axios";

import pepperoni from "@/assets/images/pizzas/pepperoni.png";
import cheese from "@/assets/images/pizzas/cheese.png";
import vetchina from "@/assets/images/pizzas/vetchina.png";
import bavarskaya from "@/assets/images/pizzas/bavarskaya.png";
import pesto from "@/assets/images/pizzas/pesto.png";
import karbonara from "@/assets/images/pizzas/karbonara.png";
import myasnaya from "@/assets/images/pizzas/myasnaya.png";
import gavayskaya from "@/assets/images/pizzas/gavayskaya.png";
import margarita from "@/assets/images/pizzas/marghar.png";
import burger from "@/assets/images/pizzas/burgerpizza.png";
import { IPizza } from "@/types/pizza.types";
import ProductsItem from "@/app/catalog/menu/lib/products/products-item/ProductsItem";

export const images: { [key: string]: MediaImage } = {
  "pepperoni.png": pepperoni,
  "cheese.png": cheese,
  "vetchina.png": vetchina,
  "bavarskaya.png": bavarskaya,
  "pesto.png": pesto,
  "karbonara.png": karbonara,
  "myasnaya.png": myasnaya,
  "gavayskaya.png": gavayskaya,
  "margarita.png": margarita,
  "burger.png": burger,
};

const Products = () => {
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
    <div className="bg-[#FCF9ED]">
      <div className={"mx-16 flex pt-12 flex-col"}>
        <h1 className={"text-4xl font-bold"}>Пиццы</h1>
        <div className={"flex gap-16 flex-wrap  mt-16 pb-12"}>
          {pizzas.map((pizza) => (
            <ProductsItem
              key={pizza.pizzaId}
              pizzaId={pizza.pizzaId}
              pizzaPrice={pizza.pizzaPrice}
              image={images[pizza.image]}
              pizzaName={pizza.pizzaName}
              pizzaDescription={pizza.pizzaDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
