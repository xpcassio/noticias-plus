import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import './App.css';
import Categoria from './pages/Categoria';
import Footer from './components/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <App />
      </main>
      <Footer />
    </div>
  </StrictMode>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="/:category/:id" element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  );
}
