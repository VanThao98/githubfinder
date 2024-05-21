import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Users from "./component/users/Users";

// const App = () => {
  
//     const [users,setUsers] = useState([]);
  
//   useEffect(() =>{
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.github.com/users');
//         console.log("GitHub users:", response.data);
//         setUsers(response.data);
//       } catch (error){
//         console.error('error fetching data:',error);
//       }
//     };
//     fetchData();
//   },[]);
//   return (
//     <div className="App">
//       <Navbar/>
//       <div className='container'>
//         <h1>
//           Hello from react
//         </h1>
//       </div>
//       <Users users={users}/>
//     </div>
//   );
// }

// export default App;
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>GitHub Users Data</h1>
      </div>
      <Users users={users} />
    </div>
  );
};
export default App;
