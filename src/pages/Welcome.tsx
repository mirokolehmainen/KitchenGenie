import React from "react";
import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Menu from "../components/Menu";
import "./Welcome.css"; // Import the CSS file for custom styling

import image1 from "/public/Kitchen2.jpg";
import image2 from "/public/kitchenGenie.png";

const Welcome: React.FC = () => {
  return (
 

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Kitchen Genie</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div className="welcome-container">
            <h1>Welcome to Our App!</h1>
            <img src={image1} alt="Image 1" className="image" />
            <img src={image2} alt="Image 2" className="image" />
            <IonItem routerLink="/recipes">
              <IonCard className="login-card">
                <IonCardHeader>
                  <IonCardTitle>Login or signup</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonItem>
        
          </div>
        </IonContent>
      </IonPage>
   
  );
};

export default Welcome;