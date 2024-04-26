"use client";
import React, { FC, useEffect, useState } from "react";
import HistoryItem from "@/app/catalog/history/lib/history-item/HistoryItem";
import axios from "axios";
import { IOrder, IOrderWithId } from "@/types/order.types";
import useAccessToken from "@/hooks/useAccessToken";

const History: FC = () => {
  useAccessToken();
  const [ordersHistory, setOrdersHistory] = useState<IOrderWithId[]>([]);

  useEffect(() => {
    axios
      .get<IOrderWithId[]>(
        `https://localhost:7217/api/Order/GetAllOrders/${localStorage.getItem("userId")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      )
      .then((res) => {
        setOrdersHistory(res.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <>
      <div className={"flex-1 min-h-screen bg-[#FCF9ED]"}>
        <div className={"pt-[100px] mx-auto max-w-screen-lg"}>
          <h1 className={"font-bold text-3xl py-14 text-center"}>
            История заказов
          </h1>
          <table className="mx-auto border-collapse">
            <thead>
              <tr>
                <th className="text-12 font-semibold text-gray-400 py-6 px-16">
                  Дата заказа
                </th>
                <th className="text-12 font-semibold text-gray-400 py-2 px-16">
                  Адрес доставки
                </th>
                <th className="text-12 font-semibold text-gray-400 py-2 px-16">
                  Сумма заказа
                </th>
                <th className="text-12 font-semibold text-gray-400 py-2 px-16">
                  Статус заказа
                </th>
              </tr>
              <tr>
                <td colSpan={4} className="border-t border-gray-200"></td>
              </tr>
            </thead>

            <tbody>
              {ordersHistory.map((pizza, index) => (
                <HistoryItem
                  date={new Date(pizza.orderDate)}
                  address={pizza.address}
                  sum={pizza.totalPrice}
                  status={pizza.orderStatus}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
