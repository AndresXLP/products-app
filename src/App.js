import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Details } from './Components/Details/details';
import { Products } from './Components/Products/Products';
import './style.scss';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="details" exact>
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
