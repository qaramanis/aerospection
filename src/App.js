import "./App.css";
import "./FadeTransition.css";
import Overlay from "./OverlayImage";
import HomeSection from "./HomeSection";
import AboutUsSection from "./AboutUsSection";
import TeamSection from "./TeamSection";
import BackgroundImages from "./BackgroundImages";

function App() {
  return (
    <div className="App">
      <BackgroundImages />
      <Overlay />
      <HomeSection />
      <AboutUsSection />
      <TeamSection />
    </div>
  );
}

export default App;
