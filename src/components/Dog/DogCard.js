import React from 'react';

export default function DogCard({ name, image, breed, age }) {
  return (
    <div className="dog-container">
      <img src={image} className="image-preview"></img>
      <h1>{name}</h1>
      <p>
        {age} year old {breed}
      </p>
    </div>
  );
}
