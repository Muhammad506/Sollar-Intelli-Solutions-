import AboutUS from "./AboutUs";
import Cta from "./Cta";
import Features from "./Features";
import LandingPage from "./LandingPage";
import ProjectComplexity from "./ProjectComplexity";
import RegisterCTA from "./RegisterCTA";
import SocietalImpact from "./SocietalImpact";
import TechnologicalStack from "./TechnologicalStack";

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <AboutUS />
      <Cta />
      <ProjectComplexity />
      <TechnologicalStack />
      <SocietalImpact />
      <Features />
      <RegisterCTA />
    </div>
  );
};

export default HomePage;
