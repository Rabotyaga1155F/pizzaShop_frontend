import React, { FC } from "react";
import { IHistoryItemProps } from "@/app/catalog/history/lib/history-item/history-item.types";

const HistoryItem: FC<IHistoryItemProps> = ({ address, sum, status, date }) => {
  return (
    <tr>
      <td className="text-center border-t border-gray-200 py-6 font-bold">
        {date.toLocaleDateString()}
      </td>
      <td className="text-center border-t border-gray-200 font-bold">
        {address}
      </td>
      <td className="text-center border-t border-gray-200 font-bold">
        {sum} ₽
      </td>
      <td className="text-center border-t border-gray-200 font-bold">
        <p className={"bg-red-600 rounded-full mx-6 py-1"}>{status}</p>
      </td>
    </tr>
  );
};

export default HistoryItem;
