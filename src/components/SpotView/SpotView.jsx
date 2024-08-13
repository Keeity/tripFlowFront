import { useSpots } from "../../hooks/useSpots";
import "./SpotView.css";
import { useParams } from 'react-router-dom';


function SpotView() {
  const { id } = useParams();
  const spots = useSpots();
  const spot = spots.find(spot => spot.id === id);

  return spot ? (
    <div className="divspotview">
      <h1 className="h1spotview">{spot.name}</h1>
      <p>{spot.description}</p>
      <div className="divspotview2">
        <h2 className="h2spotview">Endereço:</h2>
        <p>{spot.address}</p>
        <p>CEP: {spot.cep}</p>
        <p>Ponto de Referência: {spot.referencePoint}</p>
      </div>
      <div className="divspotview2">
        <h2 className="h2spotview">Localização Geográfica:</h2>
        <p>Latitude: {spot.latitude}</p>
        <p>Longitude: {spot.longitude}</p>
        <a href={spot.geoLocality}>Ver no Google Maps</a>
      </div>
      <div className="divspotview2">
        <h2 className="h2spotview">Detalhes:</h2>
        <p>Categoria de Atração: {spot.attractionCategory}</p>
        <p>Visibilidade: {spot.visibility}</p>
        <p>Nível de Aventura: {spot.adventureLevel}</p>
        <p>Custo: {spot.cost}</p>
        <p>Avaliação: {spot.rate}</p>
        <p>Acessibilidade: {spot.accessibility ? 'Sim' : 'Não'}</p>
        <p>Coleta Seletiva de Lixo: {spot.selectiveWasteCollection ? 'Sim' : 'Não'}</p>
      </div>
    </div>
  ) : (
    <div>Carregando...</div>
  );
}

export default SpotView;