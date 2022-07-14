import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Me from './pages/Me';
import Register from './pages/Register';

function App() {
  return (
    
    <>
    <Router>
    <div className='container'>
      <Header />
      <Routes>
        < Route path='/' element={<Dashboard/>}/>
        {/* <Route path='/Add' element={<AddNewPost />}/> */}
        < Route path='/login' element={<Login/>}/>
        < Route path='/register' element={<Register/>}/>
        < Route path='/me' element={<Me />} />
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
