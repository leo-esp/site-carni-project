import { Route, Routes } from "react-router-dom";
import useScript from "./hooks/useScript";
import { Home, ExecutiveMenu, DrinksMenu, ALaCarteMenu } from "./pages";

export function App() {
  useScript(["../../public/bundle.js"]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio-executivo" element={<ExecutiveMenu />} />
      <Route path="/cardapio-de-drinks" element={<DrinksMenu />} />
      <Route path="/cardapio-a-la-carte" element={<ALaCarteMenu />} />
    </Routes>
  );
}

export default App;
