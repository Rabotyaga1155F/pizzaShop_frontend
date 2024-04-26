"use client";

import React, { FC } from "react";
import useAccessToken from "@/hooks/useAccessToken";
import OrderCart from "@/app/order/lib/order-cart/OrderCart";
import Recommendations from "@/app/order/lib/recommendations/Recommendations";
import DeliveryContacts from "@/app/order/lib/delivery-contacts/DeliveryContacts";

const Order: FC = () => {
  useAccessToken();

  return (
    <div className={" bg-[#FCF9ED]"}>
      <OrderCart />
      <Recommendations />
      <DeliveryContacts />
    </div>
  );
};

export default Order;
