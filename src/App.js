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
    <BrowserRouter>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path='/yohji-yamamoto' element={<ItemListPage />} />
        <Route path='/yohji-yamamoto/category/:categoryId' element={<ItemListPage />} />
        <Route path='/yohji-yamamoto/item/:itemId' element={<ItemDetailPage />} />
        <Route path='/yohji-yamamoto/cart' element={<CartPage />} />
        <Route path='/yohji-yamamoto/checkout' element={<CheckoutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App