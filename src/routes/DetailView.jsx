import React, { Component, useEffect,useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const DetailView = () => {
    let params = useParams();
const [fullDetails, setFullDetails] = useState(null);
const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
console.log(params)
useLayoutEffect(() => {
  let ignore = false;
  console.log("djfhjd hfjd hf hd fjhdf ");
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
    return () => {ignore = true}
    }, []);
return (
    <div>

      <div>

        <h2>Details of the Event</h2>
      </div>
   
{ !fullDetails ? (<div> Loading </div>) :( 
  <table>
  <tbody> 
    <tr>
      <th>Title </th>
      <td>{fullDetails.detailsJson.title} </td>
      {/* {console.log(fullDetails.detailsJson)}
      <td></td> */}
    </tr>
    <tr>
      <th>Type</th>
      <td>{fullDetails.detailsJson.type} </td>
    </tr>
    <tr>
      <th> Created At</th>

      <td> {fullDetails.detailsJson.created_at}</td>
    </tr>
    <tr>
      <th>url </th>
      <td> {fullDetails.detailsJson.url}</td>
    </tr>
    <tr>
      <th>Address</th>
      <td> {fullDetails.detailsJson.venue.address}</td>
    </tr>
    <tr>
      <th>City </th>
      <td> {fullDetails.detailsJson.venue.city}</td>
    </tr>
    <tr>
      <th>Country </th>
      <td> {fullDetails.detailsJson.venue.country}</td>
    </tr>
    <tr>
      <th>Date</th>
      <td> {fullDetails.detailsJson.datetime_local}</td>
    </tr>

    <tr>
      <th> status </th>
      <td> {fullDetails.detailsJson.status}</td>
   {   console.log(fullDetails.detailsJson.status)}
    </tr>
    <tr>
      <th>announce_date</th>
      <td> {fullDetails.detailsJson.announce_date}</td>
    </tr>
    <tr>
      <th>Popularity </th>
      <td> {fullDetails.detailsJson.popularity}</td>
    </tr>
    <tr>
      <th>No of upcoming event </th>
      <td>{fullDetails.detailsJson.venue.num_upcoming_events} </td>
    </tr>
    <tr>
      <th>Slug </th>
      <td> {fullDetails.detailsJson.venue.slug}</td>
    </tr>
  </tbody>
</table>

)}




    </div>
     
    );
  };
  
  export default DetailView;