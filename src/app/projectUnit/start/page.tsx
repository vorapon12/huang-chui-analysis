"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Start = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FEA42B]">
      <button
        onClick={() => {
          router.push("/consend");
        }}
        className="p-4 bg-[#4100F4] text-white rounded-md w-[500px]"
      >
        เริ่มเลย
      </button>
    </div>
  );
};

export default Start;
