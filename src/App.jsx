import { Routes, Route } from "react-router";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/kelas" element={KelasPage} />
        <Route path="/testimonial" element={TestimonialPage} />
        <Route path="/faq" element={FaqPage} />
        <Route path="/syarat-ketentuan" element={SyaratKetentuanPage} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App;