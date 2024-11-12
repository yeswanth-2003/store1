import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Category from './components/getproducts1';
import ProductDetail from './components/singleitem';

function App() {
    return(
      <div>
         <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    )
}

export default App;
