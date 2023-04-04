import { Link } from "react-router-dom";
const Info = ({ id,name, type, date,city }) => {

    return(

  
       
       <div  className="row table"> 
       <Link   to={`/coinDetails/${id}`}>
       <div  className="column">{name}</div>
       </Link>
       <div  className="column">  {type} </div>
       {/* <div  className="column">{name}</div> */}
       <div  className="column"> {date}</div>
       <div  className="column"> {city}</div>
     </div>
    )



  };
  
  export default Info;