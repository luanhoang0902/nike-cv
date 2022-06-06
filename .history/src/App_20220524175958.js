// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bag from './components/Bag';


import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from './components/Help';
import Login from './components/Login';
import PageOne from "./features/PageOne";
import PageProduct from './features/PageProduct/PageProduct';
import PageTwo from './features/PageTwo';

function App() {
  let a = 0
  setTimeout(() =>{
    var a = 10;
    console.log(a)
  },2000)
  
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<PageOne />} exact></Route>
          <Route path="/nike1" element={<PageTwo />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="Help" element={<Help />}></Route>
          <Route path="Bag" element={<Bag />}></Route>
          <Route path="PageProduct" element={<PageProduct/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
