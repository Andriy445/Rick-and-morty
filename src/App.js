import "./App.css";
import { Header } from "./components/Header/Header";
import { CharacterList } from "./components/CharacterList/CharacterList";
import { Route, Routes } from "react-router-dom";
import { CharacterProfile } from "./components/CharacterProfile/CharacterProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/characterProfile/:id" element={<CharacterProfile />} />
      </Routes>
    </div>
  );
}

export default App;
