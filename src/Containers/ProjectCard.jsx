import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {animations, motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

function ProjectCard(props) {
    const {ref,inView} = useInView()
    const animmm = useAnimation()

    useEffect(()=>{
        if(inView){
            animmm.start({
                x:0,
                transition:{
                    type:'spring',duration:"1",bounce:0.3
                }
            })
        }
        if(!inView){
        
            animmm.start({x:"-100vh"})
    
        }
    },[inView])

  return (
      <div ref={ref} className="jfff">
          

        
        <motion.div className='projectcard'
        animate={animmm}
        whileHover={{scale:1.1,cursor:"pointer"}}
        key={props.key}
        >
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

        </motion.div>
    </div>
  )
}

export default ProjectCard