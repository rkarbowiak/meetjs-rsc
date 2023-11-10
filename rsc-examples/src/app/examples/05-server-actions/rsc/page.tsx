import React from "react";
import { addUser } from "../../../../../db/db";

export default function Page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const username = formData.get("username");
    addUser({
      username: username as string,
    });
    console.log("Submitted");
  };

  return (
    <form action={handleSubmit}>
      <label>Username</label> <br />
      <input id="username" name="username" className="text-black" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
