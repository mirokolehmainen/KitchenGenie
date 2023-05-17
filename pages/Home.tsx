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
import { Link } from "react-router-dom";
import Menu from "../components/Menu";



const Home: React.FC = () => {
  return (
    <>
      <Menu />

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
          <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>
            Kitchen Genie</IonTitle>
          </IonToolbar>
        </IonHeader>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonHeader>

            <IonToolbar>
              <IonTitle size="large">Welcome to use our app!</IonTitle>
            </IonToolbar>

            <IonItem routerLink="/recipes">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>View recipes</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonItem>

          </IonHeader>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;