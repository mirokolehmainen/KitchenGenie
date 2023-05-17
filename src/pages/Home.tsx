import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonMenuButton, IonSelect, IonSelectOption } from '@ionic/react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import Menu from '../components/Menu';

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  sourceUrl: string;
  ingredients: string[];
}

const Search: React.FC<RouteComponentProps> = ({ history }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Recipe[]>([]);
  const [preparationTime, setPreparationTime] = useState('');
  const [easeOfMaking, setEaseOfMaking] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxReadyTime=${preparationTime}&easeOfMaking=${easeOfMaking}&apiKey=4e9ed49c64fc4e7499a8c59f8c29ccc5`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Kitchen Genie</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>
            <IonInput
              type="text"
              placeholder="Search recipes..."
              value={query}
              onIonChange={(e) => setQuery(e.detail.value!)}
            ></IonInput>
            <IonSelect
              value={preparationTime}
              placeholder="Preparation Time"
              onIonChange={(e) => setPreparationTime(e.detail.value)}
            >
              <IonSelectOption value="15">15 minutes or less</IonSelectOption>
              <IonSelectOption value="30">30 minutes or less</IonSelectOption>
              <IonSelectOption value="60">1 hour or less</IonSelectOption>
              <IonSelectOption value="90">1 hour 30 minutes or less</IonSelectOption>
              <IonSelectOption value="120">2 hours or less</IonSelectOption>
            </IonSelect>
            <IonSelect
              value={easeOfMaking}
              placeholder="Ease of Making"
              onIonChange={(e) => setEaseOfMaking(e.detail.value)}
            >
              <IonSelectOption value="1">Easy</IonSelectOption>
              <IonSelectOption value="2">Medium</IonSelectOption>
              <IonSelectOption value="3">Difficult</IonSelectOption>
            </IonSelect>
            <IonButton onClick={handleSearch}>Search</IonButton>
          </div>
          <div>
            {results.length > 0 ? (
              results.map((recipe) => (
                <IonCard key={recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                  <IonCardHeader>
                    <IonCardSubtitle>{recipe.readyInMinutes} </IonCardSubtitle>
                    <IonCardTitle>{recipe.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {/* Render recipe details here */}
                  </IonCardContent>
                </IonCard>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Search;
