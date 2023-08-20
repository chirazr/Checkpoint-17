
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [persons, setpersons] = useState([])


const getperson=async()=>{
  let result=await axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>setpersons(res.data))

}

useEffect(() => {
  
getperson()
  }, [])


  return (
    <>
    <div className='App'>
      { persons.length? (
        persons.map((el)=>{
          <div>
             <h1>{el.name}</h1>
             <h3>{el.email}</h3>
          </div>
})) : (<img src=''></img>)
        }
      
    </div>
    </>
  );
  
}
    


export default App;
