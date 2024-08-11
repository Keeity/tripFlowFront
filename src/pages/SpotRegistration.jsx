
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./Pages.css";
import FormSpotRegistration from "../components/FormSpotRegistration/FormSpotRegistration";


function SpotRegistrationPage() {
  return (
    <div className="grid-spotregistration">

      <Header />

      {/* <Hero /> */}

      <FormSpotRegistration />
      </div>
  );
}

export default SpotRegistrationPage
