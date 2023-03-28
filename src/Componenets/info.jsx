const Info = ({ name, type, date }) => {

    return(

  
       
       <div  className="row">
       <div  className="column">  {type} </div>
       <div  className="column">{name}</div>
       <div  className="column"> {date}</div>
     </div>
    )



  };
  
  export default Info;