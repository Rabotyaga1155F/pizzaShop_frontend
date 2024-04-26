import React, { FC } from "react";
import { IGetStartedButtonProps } from "@/components/ui/buttons/get-started-button/get-started-button-types";

const GetStartedButton: FC<IGetStartedButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="text-white bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GetStartedButton;
