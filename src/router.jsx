import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/dashboard/index';
import Crypto from '../src/pages/crypto/index';
import Balance from '../src/pages/balance/index';
import Nav from './components/nav';
import Trade from './pages/trade';

export default function Router() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </BrowserRouter>    
    </>

  );
}
