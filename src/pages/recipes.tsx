import {
    IonImg,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonList,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonBreadcrumb,
    IonBreadcrumbs,
    IonButtons,
    IonMenuButton,
  } from "@ionic/react";
  import { Link, Route } from "react-router-dom";
  import Menu from "../components/Menu";
import { IonReactRouter } from "@ionic/react-router";
import { homeOutline, heartOutline, personCircleOutline, camera, film, flash, home } from "ionicons/icons";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
  

  
  const Recipes: React.FC = () => {
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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Or choose from ready lists </IonTitle>
          </IonToolbar>
        </IonHeader>
      
      <IonSearchbar placeholder="Search for ingredients"></IonSearchbar>
      </IonContent>
      
      <IonContent>

      <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" placeholder="Select all fruits that apply" multiple={true}>
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" placeholder="Select all fruits that apply" multiple={true}>
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" placeholder="Select all fruits that apply" multiple={true}>
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  
      
        
        </IonContent>



       

    </IonPage>
 </>
  );
};
  
  export default Recipes;