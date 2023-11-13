"use client";
import { MY_NAME } from "../../utils/const";

export default function SmolClientComponent() {
  return (
    <div className="flex flex-col h-screen justify-center text-center">
      <p>{MY_NAME}</p>
    </div>
  );
}
