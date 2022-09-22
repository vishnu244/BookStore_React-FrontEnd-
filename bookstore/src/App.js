import logo from './logo.svg';
import './App.css';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/Signup';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Books from './Components/Book/Book';
import DashBoard from './Pages/DashBoard/DashBoard';
import RouterComponent from './Routes/Router';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import BookView from './Components/BookView/BookView';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Cart from './Components/Cart/Cart';
import AddressDetails from './Components/AddressDetails/AddressDetails';
import OrderSuccessfull from './Components/OrderSuccessfull/OrderSuccessfull';

function App() {
  return (
    <div className="App">
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <DashBoard/> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Books/> */}
      {/* <Home/> */}
      <RouterComponent />
      {/* <Cart /> */}
      {/* <ResetPassword /> */}
      {/* <ForgotPassword/> */}
      {/* <BookView/> */}
      {/* <AddressDetails/> */}
      {/* <OrderSuccessfull/> */}
    </div>

  );
}

export default App;
