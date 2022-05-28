import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProjectCard(props) {
   
    // function GETDATATA(){
    //     var i
    //     var divs = document.getElementsByClassName('shortdesc');
    //         // divs.innerHTML = divs.innerHTML.substring(0,300);
    //         try{
    //             for(i=0;i<divs.length;i++){
    //                 divs.innerHTML = divs.innerHTML.substring(0,300)+ '...... <a href="#">Read more</a>';
    //             }
    //         }catch(err){
    //             console.log(err)
    //         }
    // }
    
    // useEffect(()=>
    // GETDATATA()
    // )

  return (
    <div className='projectcard' key={props.key}>
        <div className="imagesec">
            <img src={props.imgurl} alt="" />
        </div>
        <div className="contentsec">
            <div className="conwrapper">
            <div className="tags">
                <Link to={"/discover/"+props.tag}>
                {props.tag}
                </Link>
            </div>
            <div className="title">
            {props.title}
            </div>
            <div className="byUser">
                <p>By <span>{props.postby}</span></p>
            </div>
            <div className="shortdesc" id='shortdesc' >
                {props.shortdesc}
            </div>
            <div className="time">
                <a>Posted on: <span>{props.time}</span></a>
            </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard