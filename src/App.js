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

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route index element={<ItemListPage />} />
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