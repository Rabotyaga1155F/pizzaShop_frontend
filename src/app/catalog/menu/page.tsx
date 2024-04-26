"use client";
import React from "react";

import Products from "@/app/catalog/menu/lib/products/Products";
import Info from "@/app/catalog/menu/lib/info/Info";
import BestSellers from "@/app/catalog/menu/lib/best-sellers/BestSellers";
import useAccessToken from "@/hooks/useAccessToken";

const Menu = () => {
  useAccessToken();
  return (
    <>
      <Info />
      <BestSellers />
      <Products />
    </>
  );
};

export default Menu;
