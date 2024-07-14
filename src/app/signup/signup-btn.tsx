"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Btn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/assessment")}
      className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500 disabled:pointer-events-none disabled:opacity-50"
    >
      Sign up
    </button>
  );
};

export default Btn;
