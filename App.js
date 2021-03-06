import React from 'react';
import Firebase from "./firebase.js";
import { StackNavigator } from 'react-navigation';
import Splash from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree.js';
import ScreenFour from './ScreenFour.js';
import ScreenFive from './ScreenFive.js';
import ScreenSix from './ScreenSix.js';
import ScreenSeven from "./ScreenSeven.js";
import ScreenEight from "./ScreenEight.js";
import Login from "./Login.js"

const App = StackNavigator({
    Splash: { screen: Splash},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree},
    ScreenFour: {screen: ScreenFour},
    ScreenFive: {screen: ScreenFive},
    ScreenSix: {screen:ScreenSix},
    ScreenSeven:{screen:ScreenSeven},
    ScreenEight:{screen:ScreenEight},
    Login:{screen:Login}

},{ headerMode: 'none' })

export default App;
