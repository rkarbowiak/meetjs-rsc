import LangProvider from "../../../components/context/lang-provider";
import Users from "../../../components/users/users";

export default async function Page() {
  return (
    <LangProvider>
      <Users />
    </LangProvider>
  );
}
