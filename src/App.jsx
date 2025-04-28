import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/NavbarFiles/Navbar'
import Footer from './Component/FooterFiles/Footer'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Service from './Component/Pages/Service'
import Contact from './Component/Pages/Contact'
import Signup from './Component/Pages/Signup'
import Login from './Component/Pages/Login'
import Cart from './Component/Pages/Cart'
import Notfound from './Component/Pages/Notfound'
import Search from './Component/Pages/Search'
import Shipping from './Component/Pages/Shipping'
import ProductDetails from './Component/Pages/ProductDetails'
import Success from './Component/Pages/Success' // 
import { CartProvider } from './Component/Context/Cartcontext' // ✅ import context provider

function App() {
  return (
    <CartProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/shipping'element={<Shipping/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/product/:id' element={<ProductDetails />} />
          {/* <Route path='/success' element={<Success />} /> */}
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App