import Navbar from './components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import SignIn from './components/Auth/SignIn';
import NotFound from './components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './components/Explore/Explore';
import BurgerDetails from './components/Explore/BurgerDetails';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/burgers" element={<Explore></Explore>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/burgers/:burgerId" element={<BurgerDetails></BurgerDetails>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
