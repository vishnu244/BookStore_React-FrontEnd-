import logo from './logo.svg';
import './App.css';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/Signup';
import OrderLogin from './DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
        {/* <Signin /> */}
        {/* <Signup /> */}
        <OrderLogin />
    </div>
  );
}

export default App;
