import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
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
            <IonTitle size="large">Saved</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>

      <IonContent>
      <IonCard>
  <IonCardHeader>
    <IonCardTitle>Card Title</IonCardTitle>
    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
  </IonCardHeader>
  <IonCardContent>
    <IonList>
      <IonItem>
        <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Item</IonLabel>
      </IonItem>

      
    </IonList>
  </IonCardContent>
</IonCard>


      <IonCard>
  <IonCardHeader>
    <IonCardTitle>Card Title</IonCardTitle>
    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
  </IonCardHeader>
  <IonCardContent>
    <IonList>
      <IonItem>
        <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Item</IonLabel>
      </IonItem>   
    </IonList>
  </IonCardContent>
</IonCard>


<IonCard>
  <IonCardHeader>
    <IonCardTitle>Card Title</IonCardTitle>
    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
  </IonCardHeader>
  <IonCardContent>
    <IonList>
      <IonItem>
        <IonThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <IonLabel>Item</IonLabel>
      </IonItem>   
    </IonList>
  </IonCardContent>
</IonCard>



      </IonContent>
    </IonPage>
  );
};

export default Tab2;
