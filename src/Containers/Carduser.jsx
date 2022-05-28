import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


function Carduser(props) {
  return (
   
    <div className="atsCard teamsCard">
        <div className="imgsec">
          <img src={props.image} alt="" />
        </div>
        <div className="parea">
        <p>{props.desc}</p>
        </div>
        <div className="socials">
          <a href={props.fb}><BsFacebook/></a>
          <a href={props.ig}><BsInstagram/></a>
          <a href={props.gt}><BsGithub/></a>
        </div>
    </div>
 
  )
}

export default Carduser