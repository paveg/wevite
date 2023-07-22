import { FC } from "react";
import { useUsersIndex } from "../../apis/generated";
import { Link } from "react-router-dom";

export const UserListPage: FC = () => {
  const { isLoading, error, data } = useUsersIndex();
  let users: User[] = [];
  if (!isLoading) {
    users = data?.data?.users || [];
  }

  return(
    <>
      <h1 className="text-3xl font-bold">Test</h1>
      <div className="container mx-auto p-4">
        <ul className="list-none hover:list-decimal">
          {users.map((user: User) => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
        </ul>
      </div>
    </>
  )
}
