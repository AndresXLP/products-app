import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Products } from './Components/Products/Products';
import './style.scss';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
