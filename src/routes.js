import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ofertas from "./pages/Ofertas";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ofertas" element={<Ofertas />} />
        </Routes>
    );
}

export default MyRoutes;