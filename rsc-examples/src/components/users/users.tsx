import { User, getUsers } from "../../../db/db";
import UserList from "./user-list-lang";

export default async function Users() {
  const users: User[] = await getUsers();

  return (
    <div className="container mx-auto my-6 p-6 bg-white shadow-lg rounded-lg">
      <UserList users={users} />
    </div>
  );
}
