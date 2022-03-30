// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ProductComponent from './Product';
import Contact from './Contact';
const Tescomponent = () => <h1>test</h1>



function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Tescomponent />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
