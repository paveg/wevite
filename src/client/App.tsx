import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserDetailPage } from './pages/users/show';
import { UserListPage } from "./pages/users/list";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserListPage />,
  },
  {
    path: "/users/:id",
    element: <UserDetailPage />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
