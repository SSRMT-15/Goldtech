
import './App.css';
import axios from 'axios';
import {useEffect,useState} from "react"
import Table from './Table';

function App() {
  let [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/Data").then(res=>setData( res.data))
  },[])
  return (
    <div>
      <Table data={data}/>
    </div>
  );
}

export default App;
