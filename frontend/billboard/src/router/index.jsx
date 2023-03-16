import { createBrowserRouter } from "react-router-dom";
import Main from "../components/main/Main";
import Profile from "../components/profile/Profile";
import Gameroom from "../components/gameroom/Gameroom";
import Reserve from "../components/reserve/Reserve";
import Login from "../components/login/Login";
import Singup from "../components/login/Singup";
import Landding from "../components/landding/Landding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landding />,
    children: [{}],
  },
  {
    path: "main",
    element: <Main />,
    children: [{}],
  },
  {
    path: "profile",
    element: <Profile />,
    children: [{}],
  },
  {
    path: "gameroom",
    element: <Gameroom />,
    children: [{}],
  },
  {
    path: "reserve",
    element: <Reserve />,
    children: [{}],
  },
  {
    path: "login",
    element: <Login />,
    children: [{}],
  },
  {
    path: "singup",
    element: <Singup />,
    children: [{}],
  },
]);

export default router;
