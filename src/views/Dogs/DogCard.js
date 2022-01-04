import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    };
    fetchData();
  }, []);
  if (loading) return <h1>loading...</h1>;
  return (
    <div className="dog-container">
      {dogs.map((dog) => (
        <div className="dog-card" key={dog.id}>
          <Link to={`/dogs/${dog.id}`} key={dog.id}>
            <img src={dog.image} className="image-preview"></img>
            <h1>{dog.name}</h1>
            <p>{dog.breed}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
