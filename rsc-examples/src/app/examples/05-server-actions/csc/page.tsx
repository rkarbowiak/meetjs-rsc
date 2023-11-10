"use client";
import React from "react";

export default function Page() {
  const [username, setUsername] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ username }),
    });
    alert("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label> <br />
      <input
        id="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        className="text-black"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
