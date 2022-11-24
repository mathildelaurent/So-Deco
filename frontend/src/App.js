import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ambiance from "./pages/Ambiance";
import Chantiers from "./pages/Chantiers";
import Tableaux from "./pages/Tableaux";
import MentionsLegales from "./pages/MentionsLegales";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Renovation from "./pages/Renovation";
import "./styles/style.css";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ambiance" element={<Ambiance />} />
                <Route path="/tableaux" element={<Tableaux />} />
                <Route path="/renovation" element={<Renovation />} />
                <Route path="/chantiers" element={<Chantiers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
            </Routes>
        </>
    );
}

export default App;
