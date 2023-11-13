"use client";
import { useState } from "react";
import { User } from "../../../db/db";

export default function UsersListList({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Users</h1>
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
