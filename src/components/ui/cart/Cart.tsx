import React, { FC } from "react";
import { useAppSelector } from "@/hooks/storeHooks";
import CartItem from "@/components/ui/cart/cart-item/CartItem";
import styles from "./cart-styles.module.css";
import { useRouter } from "next/navigation";

const Cart: FC = () => {
  const cart = useAppSelector((state) => state.cart);

  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <h1 className={"text-2xl font-semibold pt-8 pl-4"}>
        {cart.length} Товара
      </h1>
      {cart.map((item) => (
        <CartItem
          key={item.pizzaId}
          id={item.pizzaId}
          name={item.pizzaName}
          image={item.image}
          price={item.pizzaPrice}
          description={item.pizzaDescription}
        />
      ))}
      <div className={"mx-6 py-4"}>
        <button
          onClick={() => {
            router.push("/order");
          }}
          className={
            cart.length > 0
              ? "text-white w-full bg-red-600 py-3 rounded-full hover:bg-red-700 font-semibold"
              : "text-white w-full bg-gray-500 py-3 rounded-full  font-semibold"
          }
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Cart;
