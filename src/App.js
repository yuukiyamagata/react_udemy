
import './App.css';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <h1>react router v6</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
