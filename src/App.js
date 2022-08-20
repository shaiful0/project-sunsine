import { Route, Routes } from 'react-router-dom';
import About from './component/Home/About';
import Footer from './component/Home/Footer';
import Header from './component/Home/Header';
import Home from './component/Home/Home';
import RequirAuth from './component/Home/RequirAuth';
import ServiceDetail from './component/Home/ServiceDetail';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<RequirAuth>
          <ServiceDetail></ServiceDetail>
        </RequirAuth>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
