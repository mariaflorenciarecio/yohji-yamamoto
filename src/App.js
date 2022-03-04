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
  Cart, 
  Checkout, 
  Error, 
  Home, 
  ItemDetail,
  ItemList,
  PrivateRoute, 
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryId' element={<ItemList />} />
        <Route path='/item/:itemId' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App