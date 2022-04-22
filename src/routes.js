import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'page/Cardapio';
import Inicio from 'page/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
