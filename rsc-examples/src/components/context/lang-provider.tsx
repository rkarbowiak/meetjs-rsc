"use client";
import { createContext, useState } from "react";

const basicLang = "en";

export const LangContext = createContext(basicLang);

export default function LangProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [lang, setLang] = useState(basicLang);

  console.log("lang", lang);
  return (
    <LangContext.Provider value={lang}>
      {children}
      <div className="text-black mt-6 text-center ">
        <select
          className="p-3 rounded-md"
          onChange={(e) => {
            setLang(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    </LangContext.Provider>
  );
}
