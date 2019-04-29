import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignIn from "~/Pages/SignIn";
import SignUp from "~/Pages/SignUp";
import Home from "~/Pages/Home";
import Buy from "~/Pages/Buy";
import Receive from "~/Pages/Receive";
import Settings from "~/Pages/Settings";
import Send from "~/Pages/Send";
import Graph from "~/Pages/Graph";
const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        SignUp,
        Home,
        Buy,
        Receive,
        Settings,
        Send,
        Graph
      },
      {
        initialRouteName: userLogged ? "Home" : "SignIn"
      }
    )
  );

export default Routes;
