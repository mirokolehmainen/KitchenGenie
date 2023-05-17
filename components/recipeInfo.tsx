import React from 'react';

type RecipeProps = {
  title: string;
  image: string;
  ingredients?: string[]; // Make ingredients prop optional
};

const Recipe: React.FC<RecipeProps> = ({ title, image, ingredients = [] }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;