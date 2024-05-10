import { Routes, BrowserRouter, Route } from "react-router-dom";
import Content from "./pages/Content";
import "../src/assets/main.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
