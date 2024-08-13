
import Header from "../components/Header/Header";
// import Hero from "../components/Hero/Hero";
import "./Pages.css";
import SpotView from "../components/SpotView/SpotView";


function SpotViewPage() {
  return (
    <div className="grid-spotview">

      <Header />
      <img className="logotripflowspotview" src="/public/logotripflowe.png" alt="Logo" />
      {/* <Hero /> */}

      <SpotView />
      </div>
  );
}

export default SpotViewPage
