import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './Components/About/About';
import { Details } from './Components/Details/details';
import { Navbar } from './Components/Navbar/Navbar';
import { Products } from './Components/Products/Products';
import './style.scss';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="details" exact>
          <Route path=":id" element={<Details />} />
        </Route>
        <Route path="/about" exact element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
