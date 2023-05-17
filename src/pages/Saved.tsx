import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonButtons, IonMenuButton } from '@ionic/react';
import Menu from '../components/Menu';

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  sourceUrl: string;
  ingredients: string[];
}

const Saved: React.FC = () => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  const handleRemoveRecipe = (recipe: Recipe) => {
    const updatedRecipes = savedRecipes.filter((savedRecipe) => savedRecipe.id !== recipe.id);
    setSavedRecipes(updatedRecipes);
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
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe) => (
            <IonCard key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <IonCardHeader>
                <IonCardSubtitle>Ready in {recipe.readyInMinutes} minutes</IonCardSubtitle>
                <IonCardTitle>{recipe.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <h4>Ingredients:</h4>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <IonButton onClick={() => handleRemoveRecipe(recipe)}>Remove</IonButton>
              </IonCardContent>
            </IonCard>
          ))
        ) : (
          <p>No saved recipes.</p>
        )}
      </IonContent>
    </IonPage>
    </>
  );
};

export default Saved;