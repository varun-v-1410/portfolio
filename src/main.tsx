import { BrowserRouter, Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import './css/index.css';
import './css/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Projects from './Projects';
import Resume from './Resume';
import Certifications from './Certifications';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/certification' element={<Certifications/>}/>
    </Routes>
  </BrowserRouter>
)