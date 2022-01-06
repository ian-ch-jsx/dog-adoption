import React from 'react';

export default function DogForm({
  name,
  setName,
  bio,
  setBio,
  image,
  setImage,
  age,
  setAge,
  breed,
  setBreed,
  species,
  setSpecies,
  updateButton,
}) {
  return (
    <div className="update">
      <form>
        <div className="control">
          <label>name:</label>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="control">
          <label>species:</label>
          <input
            placeholder="species"
            type="text"
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
        </div>
        <div className="control">
          <label>breed:</label>
          <input
            placeholder="Name"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </div>
        <div className="control">
          <label>age:</label>
          <input
            placeholder="age"
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="control">
          <label>image(url):</label>
          <input
            placeholder="image"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="control">
          <label>bio:</label>
          <input
            placeholder="description"
            type="text"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="button">
          <button onClick={updateButton}>Save</button>
        </div>
      </form>
    </div>
  );
}
