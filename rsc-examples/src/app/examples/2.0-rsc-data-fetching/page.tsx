import { type User, getUsers } from "../../../../db/db";

export default async function Page() {
  const users: User[] = await getUsers();

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
