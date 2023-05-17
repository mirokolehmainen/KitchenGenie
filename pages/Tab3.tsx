import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem,IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { FormEvent } from 'react';

const Tab3: React.FC = () => {
  function NewInfo(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile </IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>


      <IonContent>
    <form onSubmit={NewInfo}>
  <IonList>
    <IonItem>
      <IonInput label="Username" placeholder="Enter text"></IonInput>
    </IonItem>
  
    <IonItem>
      <IonInput label="Password" type="password" value="password"></IonInput>
    </IonItem>
  
    <IonItem>
      <IonInput label="New password" type="password" value="password"></IonInput>
    </IonItem>
  
    <IonItem>
      <IonInput label="Email" type="email" placeholder="email@domain.com"></IonInput>
    </IonItem>

  
    <IonButton color={'success'} type="submit" expand="block" style={{ color: '#fff', backgroundColor: '#3880ff', margin: '10px 0', borderRadius: '25px' }}>Update</IonButton>
  </IonList>
</form>





      </IonContent>
    </IonPage>
  );
};

export default Tab3;
