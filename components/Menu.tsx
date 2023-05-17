import {
    IonContent,
    IonHeader,
    IonItem,
    IonMenu,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  
  const Menu: React.FC = () => {
    return (
      <>
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem routerLink="/">Home</IonItem>
            <IonItem routerLink="/recipes">Recipes</IonItem>
            <IonItem routerLink="/tab2">Saved</IonItem>
            <IonItem routerLink="/search">Search</IonItem>
         
          </IonContent>
        </IonMenu>
      </>
    );
  };

  export default Menu;