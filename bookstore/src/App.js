import logo from './logo.svg';
import './App.css';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/Signup';
import OrderLogin from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
        {/* <Signin /> */}
        {/* <Signup /> */}
        {/* <OrderLogin/> */}
        <Header />
    </div>
  );
}

export default App;
