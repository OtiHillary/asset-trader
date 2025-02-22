import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/dashboard/index';
import Crypto from '../src/pages/crypto/index';
import Balance from '../src/pages/balance/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </BrowserRouter>
  );
}
