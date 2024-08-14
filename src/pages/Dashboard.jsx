
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./Pages.css";
import CardSpots from "../components/CardSpots/CardSpots";

import Map from "../components/Map/Map";
import Counter from "../components/Counter/Counter";

function DashboardPage() {
  return (
    <div className="grid-dashboard">

      <Header />

      <Hero />
<Counter />
      <CardSpots />
        <Map />
    </div>
  );
}

export default DashboardPage;
