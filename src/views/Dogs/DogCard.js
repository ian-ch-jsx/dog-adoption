import { useState, useEffect } from 'react';
import { getDogs } from '../../services/dogs';
import './Dogs.css';

export default function DogCard() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogs();
      setDogs(data);
      setLoading(false);
      // console.log(data);
    };
    fetchData();
  }, []);
  if (loading) return <h1>loading...</h1>;
  return (
    <div className="dog-container">
      {dogs.map((dog) => (
        <div className="dog-card" key={dog.id}>
          <p>{dog.name}</p>
          <p>{dog.breed}</p>
          <img src={dog.image} className="image-preview"></img>
        </div>
      ))}
    </div>
  );
}
