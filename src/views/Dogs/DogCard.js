import React from 'react';
import { Link } from 'react-router-dom';

export default function DogCard() {
  return (
    <div>
      Dog card
      <Link to={`/dog`}>Link</Link>
    </div>
  );
}
