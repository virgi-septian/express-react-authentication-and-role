import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import User from './pages/User';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/users' element={<User/>}/>
          <Route path='/users/add' element={<AddUser/>}/>
          <Route path='/users/edit/:id' element={<EditUser/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/products/add' element={<AddProduct/>}/>
          <Route path='/products/edit/:id' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
