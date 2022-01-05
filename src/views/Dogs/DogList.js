import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDogs } from '../../services/dogs';
import DogCard from '../../components/Dog/DogCard';
import './Dogs.css';

export default function DogList() {
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
        <Link to={`/dogs/${dog.id}`} key={dog.id}>
          <DogCard {...dog} />
        </Link>
      ))}
    </div>
  );
}
