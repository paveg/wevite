import "./App.css";

import { useState } from "react";
import { User, useUsersIndex } from "./models/generated/users";

function App() {
  const [count, setCount] = useState(0);
  const { isLoading, error, data } = useUsersIndex();
  let users: User[] = [];
  if (!isLoading) {
    users = data?.data?.users || [];
  }
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Test</h1>
      <div class="container mx-auto p-4">
        <ul class="list-none hover:list-decimal">
          {users.map((user: User) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
