import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen.js";
import SideBar from './SideBar/SideBar.js'
import Follow from "./followyourpickup.js";
import Transporter from "./beatransporter.js";
import About from "./About.js";
import ScreenSeven from "./ScreenSeven.js";
import ScreenEight from "./ScreenEight.js";
import ScreenNine from "./ScreenNine.js";
import ScreenTen from "./ScreenTen.js";
import ScreenEleven from "./ScreenEleven.js";
import ScreenSix from './ScreenSix.js';


const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Follow: {screen: Follow},
    Transporter:{screen:Transporter},
    About:{screen:About},
    ScreenSeven:{screen:ScreenSeven},
    ScreenEight:{screen:ScreenEight},
    ScreenNine:{screen:ScreenNine},
    ScreenTen:{screen:ScreenTen},
    ScreenEleven:{screen:ScreenEleven},


  },
  {
    contentComponent: props => <SideBar {...props}  />
  }
);
export default HomeScreenRouter;
