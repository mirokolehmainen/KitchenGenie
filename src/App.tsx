import React, { useState, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Welcome from "./pages/Welcome";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import LoginOrSignup from "./pages/LoginOrSignUp";
import Recipes from "./pages/recipes";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Saved from "./pages/Saved";


setupIonicReact();
const firebaseConfig = {
  apiKey: "AIzaSyD7vb0prKYyao6cjYo1ziBMERMmAZBOszc",
  authDomain: "kitchengenie-df0e9.firebaseapp.com",
  projectId: "kitchengenie-df0e9",
  storageBucket: "kitchengenie-df0e9.appspot.com",
  messagingSenderId: "433140431779",
  appId: "1:433140431779:web:dae88885ddcb545ac5b816"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export type UserType = {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
};
export const UserContext = createContext<UserType | null>(null);

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/welcome">
              <Welcome/>
            </Route>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>
            <Route exact path="/recipes">
              {isLoggedIn ? <Recipes /> : <LoginOrSignup />}
            </Route>
            <Route path="/Home" component={Home} exact={true} />
            <Redirect to="/Home" />
            <Route path="/saved" component={Saved} exact={true} />
            <Redirect to="/saved" />
            <Route path="/Profile" component={Profile} exact={true} />
            <Redirect to="/Profile" />
    
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </UserContext.Provider>
  );
};



export default App;
