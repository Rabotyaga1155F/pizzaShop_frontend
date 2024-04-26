import React, { useState, useRef, useEffect } from "react";
import { useAppSelector } from "@/hooks/storeHooks";
import ReactDOM from "react-dom";
import Cart from "@/components/ui/cart/Cart";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const cart = useAppSelector((state) => state.cart);

  const pathName = usePathname();

  const router = useRouter();

  const cartContainerRef = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(cartContainerRef.current);
    return () => {
      document.body.removeChild(cartContainerRef.current);
    };
  }, []);

  return (
    <header className="fixed w-full bg-[#FCF9ED] pb-4 ">
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={() => setCartOpen(false)}
        ></div>
      )}
      <div className={"flex justify-between items-center pt-12 mx-16"}>
        <h1 className="text-4xl font-bold text-red-500">PIZZAS.</h1>
        <nav>
          <ul className="flex">
            <li
              className={
                pathName === "/catalog/contacts"
                  ? "text-red-500 px-6 font-semibold"
                  : " px-6 font-semibold"
              }
            >
              <Link href={"/catalog/contacts"}>Контакты</Link>
            </li>
            <li
              className={
                pathName === "/catalog/menu"
                  ? "text-red-500 px-6 font-semibold"
                  : " px-6 font-semibold"
              }
            >
              <Link href={"/catalog/menu"}>Меню</Link>
            </li>
            <li
              className={
                pathName === "/catalog/history"
                  ? "text-red-500 px-6 font-semibold"
                  : " px-6 font-semibold"
              }
            >
              <Link href={"/catalog/history"}>История</Link>
            </li>
          </ul>
        </nav>
        <div className={"flex"}>
          <div>
            <div
              className={
                "h-[15px] w-[15px] bg-red-500 rounded-full absolute ml-8 text-white text-center text-[10px] my-auto font-semibold"
              }
            >
              {cart.length}
            </div>
            <button
              className={"font-semibold"}
              onClick={() => setCartOpen(!cartOpen)}
            >
              Cart
            </button>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("userId");
              router.push("/login");
            }}
            className={"pl-12 font-semibold"}
          >
            Exit
          </button>
        </div>
      </div>
      {cartOpen && ReactDOM.createPortal(<Cart />, cartContainerRef.current)}
    </header>
  );
};

export default Header;
