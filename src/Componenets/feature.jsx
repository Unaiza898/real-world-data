const Feature = ({ event1, event2, event3 }) => {

    return(

        <div className="row">
        <h2> Top Three event featured today!!</h2>
        <div  className="column">
        <div  className="box">
        <h3 > {event1}</h3> 
     </div>
        </div>
        <div  className="column">
        <div  className="box">
        <h3> {event2}</h3> 
     </div>
        </div>
        <div  className="column">
        <div  className="box">
        <h3> {event3}</h3> 

    
     </div>
        </div>
        </div>
          
       
      
    )



  };
  
  export default Feature;