"use client";
import { city_names, country_names, state_names } from "../../../../utils/geo";
import { lorem } from "../../../../utils/lorem";

export default function Page() {
  const city = city_names.find((city) => city === "New York");
  const country = country_names.find((country) => country === "United States");
  const state = state_names.find((state) => state === "New York");
  const loremSpliced = lorem.split(" ").slice(0, 10).join(" ");

  return (
    <div>
      Your location {city}, {state}, {country}
      <p>{loremSpliced}</p>
    </div>
  );
}
