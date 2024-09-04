import "./App.css";
import "./FadeTransition.css";
import Overlay from "./OverlayImage";
import MainPage from "./MainPage";
import ScrollableDestinationSection from "./ScrollableDestinationSection";
import HomeSection from "./HomeSection";
import AboutUsSection from "./AboutUsSection";

function App() {
  return (
    <div className="App">
      <Overlay />
      <HomeSection />
      <AboutUsSection />
      <ScrollableDestinationSection />
    </div>
  );
}

export default App;
