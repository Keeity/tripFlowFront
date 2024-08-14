/* eslint-disable react/prop-types */

import "./CardSpots.css";
import Counter from "../Counter/Counter";
import { useSpots } from '../../hooks/useSpots';
import Map from "../Map/Map";
import { Link } from "react-router-dom";

Link
function CardSpots() {
  const spots = useSpots();


  return (
    <div className='Grid-Category'>
      {/* <Counter></Counter> */}
      <div className="card-categorias">
        {spots.map((spot) => (
          <div className="card-category" key={spot.id} >
            <Link to={`/local/${spot.id}`}>
              <div className="card-categoria-txt">
                <span>{spot.name} </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* <Map></Map> */}
    </div>
  );
}

export default CardSpots;