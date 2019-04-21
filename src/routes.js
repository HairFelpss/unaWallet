import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignIn from "~/Pages/SignIn";
import SignUp from "~/Pages/SignUp";
import Home from "~/Pages/Home";
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      SignUp,
      Home
    }
    /*{
      initialRouteName: userLogged ? "Home" : "SignIn"
    }*/
  )
);

export default Routes;
