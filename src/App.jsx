import { Route, Routes } from "react-router-dom";

// Component
import NavbarComponent from "./components/NavbarComponent";
import FooterComonent from "./components/FooterComonent";
// Component

// Pages
import HomePages from "./pages/HomePages";
// Pages

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePages} />
      </Routes>
      <FooterComonent />
    </div>
  );
}

export default App;
