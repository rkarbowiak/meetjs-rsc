import { type User, getUsers } from "../../../../db/db";
import UserList from "../../../components/users/user-list";

export default async function Page() {
  const users: User[] = await getUsers();

  return (
    <div className="container mx-auto my-6 p-6 bg-white shadow-lg rounded-lg">
      <UserList users={users} />
    </div>
  );
}
