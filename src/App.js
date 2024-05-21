import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from "./component/users/Users";

const App = () => {
  // const App = ()=> {
    const [users,setUsers] = useState([]);
  // }
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        console.log("GitHub users:", response.data);
      } catch (error){
        console.error('error fetching data:',error);
      }
    };
    fetchData();
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <h1>
          Hello from react
        </h1>
      </div>
    </div>
  );  
}

export default App;
