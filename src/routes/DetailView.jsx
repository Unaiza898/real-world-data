import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const DetailView = () => {
    let params = useParams();
const [fullDetails, setFullDetails] = useState(null);
const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
console.log(params)
useEffect(() => {
    const getCoinDetail = async () => {
      const details = await fetch(
        "https://api.seatgeek.com/2/events/"+params.symbol+"?client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        API_KEY
      );

    const detailsJson = await details.json();
    console.log(detailsJson);
      setFullDetails({detailsJson});


    };
    getCoinDetail().catch(console.error);
    }, []);
return (
    <div>
<table>
  <tbody> 
    <tr>
      <th>Launch Date </th>
      <td> </td>
    </tr>
    <tr>
      <th>Website </th>
      <td> </td>
    </tr>
    <tr>
      <th>Whitepaper </th>
      <td> </td>
    </tr>
    <tr>
      <th>Monetary Symbol </th>
      <td> </td>
    </tr>
    <tr>
      <th>Market </th>
      <td> </td>
    </tr>
    <tr>
      <th>Last Transaction </th>
      <td> </td>
    </tr>
    <tr>
      <th>Last Transaction Value</th>
      <td> </td>
    </tr>
    <tr>
      <th>Volume </th>
      <td> </td>
    </tr>
    <tr>
      <th>Today's Open Price </th>
      <td> </td>
    </tr>
    <tr>
      <th>Highest Price during the Day </th>
      <td> </td>
    </tr>
    <tr>
      <th>Lowest Price during the Day </th>
      <td> </td>
    </tr>
    <tr>
      <th>Change from Previous Day </th>
      <td> </td>
    </tr>
    <tr>
      <th>Market Cap </th>
      <td> </td>
    </tr>
  </tbody>
</table>



    </div>
     
    );
  };
  
  export default DetailView;