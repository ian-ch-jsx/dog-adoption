import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { updateDog, getDogById } from '../../services/dogs';
import DogForm from '../../components/Dog/DogForm';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDogById(params.id);

      setName(resp.name);
      setSpecies(resp.species);
      setBreed(resp.breed);
      setAge(resp.age);
      setImage(resp.image);
      setBio(resp.bio);
    };
    fetchData();
  }, [params.id]);

  const updateButton = async (e) => {
    e.preventDefault();
    await updateDog(params.id, name, species, breed, age, image, bio);
  };
  return (
    <div>
      <h1>Edit Pet Bio:</h1>
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
