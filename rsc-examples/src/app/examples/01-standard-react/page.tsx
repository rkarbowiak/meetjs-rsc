"use client";

import { useEffect, useState } from "react";
import { type User } from "../../../../db/db";

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="container mx-auto my-6 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Users</h1>
      <ul className="list-disc space-y-2 pl-5">
        {users.map((user) => (
          <li key={user.userId} className="text-gray-600 text-lg">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
