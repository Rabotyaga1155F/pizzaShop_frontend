import React from "react";
import type { PropsWithChildren } from "react";
import Header from "@/components/ui/header/Header";

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
  return (
    <main className={"fixed"}>
      <Header />
      {children}
    </main>
  );
}
