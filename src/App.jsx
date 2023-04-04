import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Info from "./Componenets/info";
import Feature from "./Componenets/feature";
import { PieChart,Cell, Pie, Legend, Tooltip } from "recharts";

import SideNav from "./Componenets/sidenav";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [dropdown, setDropdown] = useState("");

  const Data = [
    { name: "Family", value: 1 },
    { name: "wwe", value: 1},
    { name: "pga", value: 1 },
    { name: "tennis", value: 1 },
    { name: "concert", value: 1 },
  ];
  const Data2 = [
    { name: "Sutton", value: 1 },
    { name: "Kansas City", value: 1},
    { name: "Inglewood", value: 1 },
    { name: "Agusta", value: 1 },
    { name: "Houston", value: 1 },
    { name: "New York", value: 1 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
       return (
       <div
          className="custom-tooltip"
          style={{
             backgroundColor: "#ffff",
             padding: "5px",
             border: "1px solid #cccc"
          }}
       >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
       </div>
    );
 }
 return null;
};
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // how do we call an API using fetch?

        "https://api.seatgeek.com/2/events?client_id=" +
          CLIENT_ID +
          "&client_secret=" +
          API_KEY
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
  const searchItems = (inputString, columns) => {
    console.log();
    setSearchInput(inputString);
    if (columns == "short_title") {
      // this is the conditional that will be used to filter the list of characters
      setFilteredResults(
        list.events.filter((item) => {
          return item.short_title
            .toLowerCase()
            .includes(inputString.toLowerCase());
        })
      );
    } else if (columns == "type") {
      setFilteredResults(
        list.events.filter((item) => {
          return item.type.toLowerCase().includes(inputString.toLowerCase());
        })
      );
    } else if (columns == "city") {
      setFilteredResults(
        list.events.filter((item) => {
          return item.venue.city
            .toLowerCase()
            .includes(inputString.toLowerCase());
        })
      );
    }
  };

  const options = [
    "Family",
    "Sports",
    "Theatre",
    "Concert",
    "nhl",
    "Classical_opera",
    "Comedy",
  ];

  return (
    <div className="app">
      <div className="feature">
        <SideNav />
        <Feature
          event1={list.events[0].short_title}
          event2={list.events[1].short_title}
          event3={list.events[2].short_title}
        />
        <h1> Event List</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(inputString) =>
            searchItems(inputString.target.value, "short_title")
          }
        />

        <select
          className="dropdown"
          onChange={(inputString) =>
            searchItems(inputString.target.value, "type")
          }
        >
          <option>Please choose one option</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Enter a city:"
          onChange={(inputString) =>
            searchItems(inputString.target.value, "city")
          }
        />

        <div className="row table">
          <div className="column">type</div>
          <div className="column">name</div>
          <div className="column">date</div>
          <div className="column">date</div>
        </div>

        {searchInput.length > 0 ? (
          filteredResults.map((data) => (
            <ul>
              {/* <li key={coin.short_title}>{coin.short_title}</li>  */}
              <Info
                name={data.short_title}
                type={data.type}
                date={data.datetime_local}
                id = {data.id}
                city={data.venue.city}
              />
              {console.log(filteredResults)}

              {/* 
    <li key={list.events[data].short_title}>{list.events[data].short_title}</li> */}
            </ul>
          ))
        ) : (
          <ul>
            {list &&
              Object.entries(list.events).map(([data]) => (
                <Info
                  name={list.events[data].short_title}
                  type={list.events[data].type}
                  id = {list.events[data].id}
                  date={list.events[data].datetime_local}
                  city={list.events[data].venue.city}
                />
              ))}
          </ul>
        )}
        <div className="chart">
          <h3> Types of events</h3>
        <PieChart width={500} height={270}>
      <Pie
         data={Data}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {Data.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>


      
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
        </div>


        <div className="chart">
        <h3> events place</h3>
        <PieChart width={500} height={370}>
      <Pie
         data={Data2}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="40%"
         cy="40%"
         outerRadius={120}
         fill="#8884d8"
      >
         {Data2.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>


      
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
        </div>
      </div>
     
    </div>
  );
}

export default App;
