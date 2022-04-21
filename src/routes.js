import Menu from 'components/Menu';
import Cardapio from 'page/Cardapio';
import Inicio from 'page/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return(
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cardapio' element={<Cardapio />} />
      </Routes>  
    </Router>

  );
}