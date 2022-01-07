import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { addDog } from '../../services/dogs';
import DogForm from '../../components/Dog/DogForm';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  const updateButton = async (e) => {
    try {
      e.preventDefault();
      await addDog({ name, species, breed, age, image, bio });
      setMessage('Pet added successfully.');
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } catch {
      setMessage('Something went wrong!');
    }
  };
  return (
    <div>
      <h1>Add pet</h1>
      <p>{message}</p>
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
