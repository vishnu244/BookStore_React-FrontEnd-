import logo from './logo.svg';
import './App.css';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/Signup';
import OrderLogin from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Books from './Components/Book/Book';

function App() {
  return (
    <div className="App">
        {/* <Signin /> */}
        {/* <Signup /> */}
        {/* <OrderLogin/> */}
        {/* <Header /> */}
        {/* <Footer /> */}
        {/* <Books/> */}
        <Home/>
    </div>
  );
}

export default App;
