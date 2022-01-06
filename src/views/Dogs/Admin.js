import { useState } from 'react';
import { addDog } from '../../services/dogs';
import DogForm from '../../components/Dog/DogForm';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const updateButton = async (e) => {
    e.preventDefault();
    await addDog({ name, species, breed, age, image, bio });
  };
  return (
    <div>
      <h1>Add pet:</h1>
      <DogForm
        name={name}
        setName={setName}
        species={species}
        setSpecies={setSpecies}
        breed={breed}
        setBreed={setBreed}
        age={age}
        setAge={setAge}
        image={image}
        setImage={setImage}
        bio={bio}
        setBio={setBio}
        updateButton={updateButton}
      />
    </div>
  );
}
