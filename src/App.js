import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from 'react-router-dom'

import { 
  Navbar, 
  Sidebar, 
  Footer,
} from './components'

import { CartProvider } from './context/CartContext'

import {  
  CartPage, 
  CheckoutPage, 
  ErrorPage, 
  HomePage, 
  ItemDetailPage,
  ItemListPage,
  PrivateRoute, 
} from './pages'

// ACLARACION: en BrowserRouter se agrega "basename" para el correcto funcionamiento de las rutas en GitHub Pages

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={process.env.YOHJI_YAMAMOTO}>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<ItemListPage />} />
          <Route path='collection' element={<ItemListPage />} />
          <Route path='category/:categoryId' element={<ItemListPage />} />
          <Route path='item/:itemId' element={<ItemDetailPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App