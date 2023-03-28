import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './Componenets/info';
import Feature from './Componenets/feature';
import SideNav from './Componenets/sidenav';
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const  CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID ;
function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // how do we call an API using fetch? 
     
          "https://api.seatgeek.com/2/events?client_id=" + CLIENT_ID 
          +"&client_secret="  + API_KEY 
      );
      const json = await response.json();
      setList(json);
      console.log(json);
    };
    fetchData().catch(console.error);
  }, []);

  // const searchItems = searchValue => {
  //   setSearchInput(searchValue);

  //   console.log(searchValue);
  //   if (searchValue !== "") {
  //     console.log(Object.keys(list.events.map))
  //     const filteredData = Object.keys(list.events.map).filter((item) => 
  //       Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchValue.toLowerCase())
  //     )
  //     console.log(filteredData);
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(Object.keys(list.events));
  //   }
  // };
  const searchItems = (inputString) => {

    setSearchInput(inputString)
    // this is the conditional that will be used to filter the list of characters
    setFilteredResults(list.events.filter((item) => {
          return item.short_title.toLowerCase().includes(inputString.toLowerCase())
    }))}




  return (
  
    <div className="whole-page">
        <SideNav/>
      <Feature  event1 = {list.events[0].short_title }
      event2 = {list.events[1].short_title }
        event3 = {list.events[2].short_title }    />
    <h1> Event List</h1>
    <input
    type="text"
    placeholder="Search..."
    onChange={(inputString) => searchItems(inputString.target.value)}
  />
<div className="row">

<div  className="column">type</div>
<div  className="column">name</div>
<div  className="column">date</div>
</div>
  

        {searchInput.length > 0
      ? filteredResults.map((data) => 
      <ul>
 {/* <li key={coin.short_title}>{coin.short_title}</li>  */}
 <Info name ={data.short_title}
  type ={data.type}
  date ={data.short_title}
  />
        {console.log(filteredResults)}
    
{/* 
    <li key={list.events[data].short_title}>{list.events[data].short_title}</li> */}



      </ul>
        )
      :    <ul>
      {list && Object.entries(list.events).map(([data]) =>

<Info name ={list.events[data].short_title}
      type = {list.events[data].type}
      date = {list.events[data].type} />

)} 


      </ul>
        }
  </div>
  )
}

export default App