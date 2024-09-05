import "./App.css";
import "./FadeTransition.css";
import Overlay from "./OverlayImage";
import HomeSection from "./HomeSection";
import AboutUsSection from "./AboutUsSection";
import TeamSection from "./TeamSection";

function App() {
  return (
    <div className="App">
      <Overlay />
      <HomeSection />
      <AboutUsSection />
      <TeamSection />
    </div>
  );
}

export default App;
