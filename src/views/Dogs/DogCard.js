import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDogs } from '../../services/dogs';

export default function DogCard() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogs();
      setDogs(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  if (loading) return <h1>loading...</h1>;
  return (
    <div className="dog-card">
      {dogs.map((dog) => {
        <p key={dog.id}>{dog.name} test</p>;
      })}
    </div>
  );
}
