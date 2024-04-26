"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import logo from "@/assets/images/pizzaLogo.png";
import Link from "next/link";
import { useAppStore } from "@/hooks/storeHooks";
import { setAccessToken } from "@/store/auth/authSlice";
import { useRouter } from "next/navigation";
import SuccessNotification from "@/components/ui/success-notification/SuccessNotification";
import FailedNotification from "@/components/ui/failed-notification/FailedNotification";

const Login = () => {
  const router = useRouter();

  const { handleSubmit, reset, register } = useForm();
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showFailedNotification, setShowFailedNotification] = useState(false);

  const store = useAppStore();
  const onSubmit = (data: any) => {
    axios
      .post(
        "https://localhost:7217/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      )
      .then(function (response) {
        localStorage.setItem("accessToken", response.data.accessToken);
        store.dispatch(setAccessToken(response.data.accessToken));
        if (response.status === 200) {
          setShowSuccessNotification(true);
          setTimeout(() => setShowSuccessNotification(false), 5000);
          router.replace("/catalog/menu");

          axios
            .get("https://localhost:7217/User/UserId", {
              headers: {
                Authorization: `Bearer ${response.data.accessToken}`,
              },
            })
            .then((res) => {
              localStorage.setItem("userId", res.data);
            })
            .catch((error) => {
              alert(error);
            });
        }
      })
      .catch(function (error) {
        setShowFailedNotification(true);
        setTimeout(() => setShowFailedNotification(false), 5000);
      });
  };

  return (
    <>
      {showSuccessNotification && (
        <SuccessNotification>Успешная авторизация</SuccessNotification>
      )}
      {showFailedNotification && (
        <FailedNotification>Неверный логин или пароль</FailedNotification>
      )}
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
          <h1
            className={"text-center text-[#C32B86] font-bold text-[24px] mt-2"}
          >
            Login
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className={
                "block bg-[#F4F4F4] h-10 rounded-xl mx-auto pl-2 w-[250px] mt-3"
              }
              placeholder={"Email"}
              {...register("email")}
              type="text"
            />

            <input
              className={
                "block bg-[#F4F4F4] h-10 rounded-xl mx-auto pl-2 w-[250px] mt-4"
              }
              placeholder={"Password"}
              {...register("password")}
              type="password"
            />

            <div className={"px-6 mt-3"}>
              <button
                className={
                  " h-10 rounded-xl text-white  w-full px-12  mt-4 bg-[#C32B86]"
                }
                type="submit"
              >
                Sign in
              </button>
            </div>
            <div className={"flex justify-center mt-2"}>
              <h3 className={"text-gray-300 text-[12px]"}>
                I don't have an account{" "}
              </h3>

              <Link
                className={"text-[#C32B86] font-medium text-[12px] pl-2"}
                href={"/register"}
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
