import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserDetailPage } from './pages/users/show';
import { UserListPage } from "./pages/users/list";
import { IceBreakerListPage } from "./pages/icebreakers/list";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IceBreakerListPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
