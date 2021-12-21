import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductCard } from './Components/Products/ProductCard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ProductCard />} />
      </Routes>
    </Router>
  );
}

export default App;
