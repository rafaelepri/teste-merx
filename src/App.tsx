import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrderProvider } from 'contexts/OrderContext';

import 'assets/css/global.css';

import Home from 'pages/Home';
import Details from 'pages/Details';

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;
