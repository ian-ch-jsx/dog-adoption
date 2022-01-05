import React from 'react';
import './DogDetail.css';
export default function DogDetail({ name, image, breed, age, bio }) {
  return (
    <div className="dog-info">
      <h1>{name}</h1>
      <img src={image} className="dog-image"></img>
      <h2>{breed}</h2>
      <p>{age} year(s) old.</p>
      <p>{bio}</p>
    </div>
  );
}
