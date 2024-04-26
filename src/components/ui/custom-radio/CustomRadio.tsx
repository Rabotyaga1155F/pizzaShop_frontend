import React, { FC, useEffect, useState } from "react";
import { ICustomRadioProps } from "@/components/ui/custom-radio/custom-radio.types";

const CustomRadio: FC<ICustomRadioProps> = ({ title, selected, onSelect }) => {
  const [isChecked, setIsChecked] = useState(selected || false);

  useEffect(() => {
    // Обновляем isChecked при изменении пропа selected
    setIsChecked(selected || false);
  }, [selected]);

  const handleClick = () => {
    if (!isChecked) {
      setIsChecked(true);
      onSelect(title);
    }
  };

  return (
    <div
      className={
        !isChecked
          ? "bg-[#BFB7B6] rounded-full inline-block cursor-pointer"
          : "bg-[#50A684] rounded-full inline-block cursor-pointer"
      }
      onClick={handleClick}
    >
      <h1 className={"text-white font-semibold py-5 px-7 "}>{title}</h1>
    </div>
  );
};

export default CustomRadio;
