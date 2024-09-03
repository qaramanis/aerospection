import logo_black from "./logo-black.png";
import "./App.css";
import Overlay from "./barOverlay";
import { Dimensions } from "react-native";
import MainPage from "./MainPage";

function App() {
  const logoRatio = 5.168711656;
  const windowHeight = Dimensions.get("window").height;

  return (
    <div className="App">
      <header className="App-header">
        <Overlay />
        <MainPage />
      </header>
    </div>
  );
}

export default App;
