import React, { FC } from "react";
import { IViewMenudButtonProps } from "@/components/ui/buttons/view-menu-button/view-menu-button-types";

const ViewMenuButton: FC<IViewMenudButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="text-black bg-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-500 font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ViewMenuButton;
