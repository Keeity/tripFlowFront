
import "./CardSpots.css";
import Counter from "../Counter/Counter";
import { useState, useEffect } from 'react'; 


function CardSpots() {
  const [spots, setSpots] = useState([])

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await fetch('http://localhost:3000/spots');
        const data = await response.json();
        setSpots(data);
      } catch (error) {
        console.error('Erro ao buscar spots:', error);
      }
    };

    fetchSpots();
  }, []); 

  return (
    <div className='Grid-Category'>
      <Counter></Counter>
      <div className="card-categorias">
        {spots.map((spot) => (
          <div className="card-category" key={spot.id}>
            <a href={`http://localhost:3000/spots/${spot.id}`} target="_blank" rel="noopener noreferrer">
              <div className="card-categoria-txt">
                <span>{spot.name} </span>
              </div>
              <div className="card-categoria-p">
                <p className="pcard">{spot.visitDate} </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSpots;