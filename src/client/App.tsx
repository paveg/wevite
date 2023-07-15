import "./App.css";

import { useState } from "react";
import { User, useUsersIndex } from "./models/generated/users";

function App() {
  const [count, setCount] = useState(0);
  const { isLoading, error, data } = useUsersIndex();

  const users = data?.data;
  return (
    <div className="App">
      <h1>Test</h1>
      {!isLoading && users?.users?.map((user: User) => <div key={user.id}>{user.id}: {user.name}</div>)}
    </div>
  );
}

export default App;
