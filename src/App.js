import "./App.css";
import Overlay from "./OverlayImage";
import MainPage from "./MainPage";
import ScrollableDestinationSection from "./ScrollableDestinationSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Overlay />
        <MainPage />
      </header>
      <ScrollableDestinationSection />
    </div>
  );
}

export default App;
