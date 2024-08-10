/* eslint-disable react/prop-types */

import "./CardSpots.css";
import Counter from "../Counter/Counter";
import { useSpots } from '../../hooks/useSpots';
import Map from "../Map/Map";

function CardSpots() {
  const spots = useSpots();


  return (
    <div className='Grid-Category'>
      <Counter></Counter>
      <div className="card-categorias">
        {spots.map((spot) => (
          <div className="card-category" key={spot.id} >
            <a href={`http://localhost:3000/spots/${spot.id}`} target="_blank" rel="noopener noreferrer">
              <div className="card-categoria-txt">
                <span>{spot.name} </span>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Map></Map>
    </div>
  );
}

export default CardSpots;