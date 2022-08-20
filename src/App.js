import { Route, Routes } from 'react-router-dom';
import Footer from './component/Home/Footer';
import Header from './component/Home/Header';
import Home from './component/Home/Home';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
