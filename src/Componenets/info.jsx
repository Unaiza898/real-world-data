const Info = ({ name, type, date,city }) => {

    return(

  
       
       <div  className="row">
       <div  className="column">  {type} </div>
       <div  className="column">{name}</div>
       <div  className="column"> {date}</div>
       <div  className="column"> {city}</div>
     </div>
    )



  };
  
  export default Info;