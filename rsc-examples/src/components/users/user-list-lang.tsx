"use client";
import { useState, useContext } from "react";
import { User } from "../../../db/db";
import { LangContext } from "../context/lang-provider";

export default function UsersList({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const lang = useContext(LangContext);

  console.log("lang", lang);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lang === "en" ? "Users" : "Użytkownicy"}
      </h1>

      {users.map((user) => (
        <li key={user.userId} className="text-gray-600 text-lg flex gap-2">
          {user.username}

          <input
            type="checkbox"
            checked={user.userId === selectedUser?.userId}
            onChange={() => setSelectedUser(user)}
          />
        </li>
      ))}
    </>
  );
}
