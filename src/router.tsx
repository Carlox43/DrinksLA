import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPages from "./views/indexPages";
import FavoritePage from "./views/FavoritePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPages />} />
        <Route path="/" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}
