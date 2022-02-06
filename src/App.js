import logo from './logo.svg';
import './App.css';
import MainPage from './pages/main'
import News from './pages/news'
import Login from './pages/login'
import Account from './pages/account'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Nav,Container} from 'react-bootstrap'
import { useReducer } from 'react';
import {useSelector,useDispatch, Provider} from 'react-redux'
import {Link,Routes,Route} from "react-router-dom";


function App() {
  const pop = useSelector(state=>state.onVisiblePopup)
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/news" element={<News/>}/> 
        <Route path="/account" element={<Account/>}/>
        <Route path="/login" element={<Login/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
