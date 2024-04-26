"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import logo from "@/assets/images/pizzaLogo.png";
import Link from "next/link";

const SignUp = () => {
  const { handleSubmit, reset, register } = useForm();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = (data: any) => {
    if (password === confirmPassword) {
      axios
        .post("https://localhost:7217/register", {
          email: data.email,
          password: data.password,
        })
        .then(function (response) {
          alert(response);
        })
        .catch(function (error) {
          alert(error);
        });
    } else {
      alert("Пароль должен быть одинаковый");
    }
  };
  return (
    <div
      className={
        "bg-gradient-to-tr from-[#C32B86] to-[#7EA0B7] h-screen w-screen flex items-center justify-center"
      }
    >
      <div className={"w-[300px] h-[400px] rounded-3xl bg-white "}>
        <div className={"flex items-center ml-4 mt-4"}>
          <Image className={"w-8 h-8"} src={logo} alt={""} />
          <h2 className={"pl-3"}>PizzaShop</h2>
        </div>
        <h1 className={"text-center text-[#C32B86] font-bold text-[24px] mt-2"}>
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={"block bg-[#F4F4F4] h-10 rounded-xl mx-auto pl-8 mt-3"}
            placeholder={"Email"}
            {...register("email")}
            type="text"
          />

          <input
            className={"block bg-[#F4F4F4] h-10 rounded-xl mx-auto pl-8 mt-4"}
            placeholder={"Password"}
            {...register("password")}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
          />
          <input
            className={"block bg-[#F4F4F4] h-10 rounded-xl mx-auto pl-8 mt-4"}
            placeholder={"Confirm password"}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="text"
          />

          <div className={"px-6 mt-3"}>
            <button
              className={
                " h-10 rounded-xl text-white  w-full px-12  mt-4 bg-[#C32B86]"
              }
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className={"flex justify-center mt-2"}>
            <h3 className={"text-gray-300 text-[12px]"}>
              I don't have an account{" "}
            </h3>
            <Link
              className={"text-[#C32B86] font-medium text-[12px] pl-2"}
              href={"/login"}
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
