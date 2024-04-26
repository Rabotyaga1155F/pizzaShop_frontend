import React, { FC, useState } from "react";
import Image from "next/image";
import flag from "@/assets/images/flag.svg";

const NumberField: FC<{ register?: any }> = ({ register }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <h3 className={"text-gray-400 pb-3 pt-5"}>Номер телефона</h3>
      <div className={"flex items-center"}>
        <Image className={"w-5 h-5 absolute pl-2"} src={flag} alt={""} />
        <span className={" absolute pl-6"}>+7</span>

        <input
          {...register}
          value={inputText}
          onChange={(event) => {
            const enteredValue = event.target.value;
            const onlyNumbers = enteredValue.replace(/[^0-9]/g, "");
            setInputText(onlyNumbers);
          }}
          className={"bg-[#F8F8F8] pl-11 pr-44 py-4 rounded-xl focus:outline-0"}
          type="text"
        />
      </div>
    </div>
  );
};

export default NumberField;
