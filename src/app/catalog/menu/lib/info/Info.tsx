import React from "react";
import Image from "next/image";
import pizza1 from "@/assets/images/pizzaInfo1.png";
import pizza2 from "@/assets/images/pizzaInfo2.jpg";
import woman from "@/assets/images/logonew.png";
import GetStartedButton from "@/components/ui/buttons/get-started-button/GetStartedButton";
import ViewMenuButton from "@/components/ui/buttons/view-menu-button/ViewMenuButton";

const Info = () => {
  return (
    <div className="bg-[#FCF9ED] flex  pt-24">
      <div className="w-1/2  mx-16 mt-28">
        <div className={"flex"}>
          <p className="text-7xl font-semibold text-red-600 ">Feel </p>
          <p className="text-7xl font-semibold">&nbsp; the extra</p>
        </div>
        <div className={"flex"}>
          <p className="text-7xl font-semibold">ordinary</p>
          <div className={"flex pt-4"}>
            <Image className={"h-[60px] w-[60px] ml-5"} src={pizza1} alt={""} />
            <Image className={"h-[60px] w-[60px] ml-4"} src={pizza2} alt={""} />
          </div>
        </div>
        <div className={"flex"}>
          <p className={"text-7xl font-semibold"}>love our</p>
          <p className="text-7xl font-semibold text-red-600">&nbsp; pizzas</p>
        </div>
        <div className={"mr-56 mt-6"}>
          <p className="text-[16px] font-semibold text-gray-500">
            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className={"mt-6 flex justify-between w-[300px]"}>
          <GetStartedButton>Get Started</GetStartedButton>
          <ViewMenuButton>View Menu</ViewMenuButton>
        </div>
      </div>
      <div className="w-1/2 h-12 ">
        <Image className={" rounded-full  "} src={woman} alt={""} />
      </div>
    </div>
  );
};

export default Info;
