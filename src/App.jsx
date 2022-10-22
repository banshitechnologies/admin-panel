
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './Pages/Products';
import MyServices from './Pages/MyServices';
import Orders from './Pages/Orders';
import Login from './Pages/Login';
import Register from './Pages/Register';

import 'animate.css';
function App() {



  return (
    <div className="App">
      <BrowserRouter>

        <div className="row margins">
          <div className= "col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="main">
              <Navbar />
              <Routes>
                <Route path='/products' element={<Products />} />
                <Route path='/myservices' element={<MyServices />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/' element={<Home />} />
                
                {/* <Route exact path='/signup' element={<Signup/>} /> */}

              </Routes>
            </div>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
