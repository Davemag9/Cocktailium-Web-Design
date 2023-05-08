import { Routes, Route, Navigate } from 'react-router-dom';

import { MainPage } from "./pages/MainPage";
import { RandomPage } from "./pages/RandomPage";
import { ByLetterPage } from "./pages/ByLetterPage";
import { ByNamePage } from "./pages/ByNamePage";
import { GalleryPage } from "./pages/GalleryPage";

import { OfferPhotoPage } from "./pages/OfferPhotoPage";
import { CocktailPage } from "./pages/CocktailPage";

import { Header } from './Header';

const App = () => {
  

  return (
    <>
      <Header/>
       <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/random" element={<RandomPage />} />
          <Route path="/byletter" element={<ByLetterPage />} />
          <Route path="/byname" element={<ByNamePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/post" element={<OfferPhotoPage />} />
          <Route path="/cocktail" element={<CocktailPage />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
       </Routes>
    </>
 );
}

export default App;
