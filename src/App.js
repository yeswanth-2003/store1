import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Category from './components/getproducts1';
import ProductDetail from './components/singleitem';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import store from './components/redux';

function App() {
    return(
      <div>
      <Provider store={store}>
         <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </Provider>
    
       
      </div>
    )
}

export default App;
