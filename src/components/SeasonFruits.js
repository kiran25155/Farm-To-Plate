import React, { useEffect, useState} from "react";
import { createGlobalStyle } from 'styled-components';
import axios from "axios"; 
import "./Seasons.css"
const SeasonFruits=({getData})=>{
  let component = [];

     getData=3;
  
    const [style,setStyle]=useState({});
    const [fruits,setFruits]=useState([])
    async function getMonthsWiseFruits(){
        let result=await axios.get(`http://localhost:8085/Products/`+9);
        let fruit=result.data.produces.split(",");
          setFruits([...fruits,fruit]);
          if(getData==3||getData==4||getData==5){
            // setStyle({"backgroundColor": "rgba(68, 127, 74, 0.8)"})
           }
          else if(getData==8||getData==6||getData==7){
            // setStyle({"backgroundColor": "rgb(213, 201, 154)"})
          }
          else if(getData==11||getData==9||getData==10){
            // setStyle({"backgroundColor": "rgba(193, 151, 60, 0.8)"})
            // console.log({"backgroundColor": "rgba(193, 151, 60, 0.8)"})
            console.log(style);
          }
          else if(getData==2||getData==12||getData==1){
            // setStyle({"backgroundColor": "rgba(62, 57, 204, 0.8)"})
           }
           
        }
     useEffect(()=>{
        getMonthsWiseFruits()
     },[])
    return(
    <>
    <body>
    {(()=>{
       if(getData==6||getData==7||getData==8){
        const  Summer=createGlobalStyle`
        body {
          background-size: cover !important;
          background-color: yellow;
        }`
        return <Summer></Summer>
      }
   })()}

   {(()=>{
       if(getData==9||getData==10||getData==11){
        const  Autum=createGlobalStyle`
        body {
          background-size: cover !important;
          background-color: rgb(205, 138, 15);
        }`
        return <Autum></Autum>
      }
   })()}

   {(()=>{
       if(getData==3||getData==4||getData==5){
        const  Spring=createGlobalStyle`
        body {
          background-size: cover !important;
          background-color: rgb(12, 147, 12);
        }`
        return <Spring></Spring>
      }
   })()}
  {(()=>{
     if(getData==12||getData==1||getData==2){
      const  Winter=createGlobalStyle`
      body {
        background-size: cover !important;
        background-color: rgb(14, 14, 164);
      }`
      return <Winter></Winter>
    }
  })()}


    <h1 class="Title">Whats in Season!</h1>
    <div  className="grid-container">
   {true?(()=>{
        let components = [];
            for(let ele of fruits) {
                for(let ele1 of ele){
                    components.push(<button>{ele1}</button>); 
                }
            }
            return components;
           }
        )():null
   }
   </div>
   </body>
  
    </>
    )
    }
    export default SeasonFruits;