import React, { useEffect } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdNavigateNext} from 'react-icons/md'
import { Link,useParams} from 'react-router-dom'



function Login() {
    let {id} = useParams()
    function getDetails(e){
        var logwrap = document.getElementById('logwrap')
        var sin = document.getElementById('sin')
        var sup = document.getElementById('sup')
        var signwrap = document.getElementById('signwrap')
        if(e==1){
            logwrap.style.display = 'block'
            signwrap.style.display = 'none'
            sin.className = 'sin act'
            sup.className = 'sup'

        }else{
            logwrap.style.display = 'none'
            signwrap.style.display = 'block'
            sin.className = 'sin'
            sup.className = 'sup act'
        }
    
    }
    function firstDet(e){
        e=id
        var logwrap = document.getElementById('logwrap')
        var sin = document.getElementById('sin')
        var sup = document.getElementById('sup')
        var signwrap = document.getElementById('signwrap')
        if(e=="login"){
            logwrap.style.display = 'block'
            signwrap.style.display = 'none'
            sin.className = 'sin act'
            sup.className = 'sup'

        }else{
            logwrap.style.display = 'none'
            signwrap.style.display = 'block'
            sin.className = 'sin'
            sup.className = 'sup act'
        }
    }

    useEffect(()=>
    firstDet()
    )
  return (
    <div className='Logarea'>

        <div className="loginArea">
        <Link to={'/'}>
            <div className="topLogo">
            <img src="https://www.hcparishtx.com/wp-content/uploads/2016/09/donation.png" alt="" />
            <p>Donatebox</p>
            </div>
        </Link>

            <div className="sinsup">
                <div className="sin act" id='sin' onClick={() => getDetails(1)}>
                <a>Sign In</a>
                </div>
                <div className="sup" id='sup' onClick={() => getDetails(2)}>
                <a>Sign Up</a>
                </div>
            </div>
    
            {/* logdets */}
            <div className="logwrap" id='logwrap'>
                <div className="logDetails">
                    <div className="email">
                        <FaUserAlt size={20}/>
                    <input type="text" placeholder='Email' />
                    </div>
                    <div className="password">
                        <RiLockPasswordFill size={20}/>
                    <input type="Password" placeholder='Password' />
                    </div>
                    <div className="for">
                        <a>Forgot Your password?</a>
                        <div className="btmm">
                        </div>
                    </div>
                </div>
                <div className="proceed">
                    <div className="proxx">
                    <MdNavigateNext  color='white' />
                    </div>
                </div>
            </div>
            {/* Signwrap */}
            <div className="signwrap" id='signwrap'>
                <div className="logDetails sigdet">
                        <div className="email">
                            <FaUserAlt size={20}/>
                        <input type="text" placeholder='Email' />
                        </div>
                        <div className="password">
                            <RiLockPasswordFill size={20}/>
                        <input type="Password" placeholder='Password' />
                        </div>
                        <div className="email sigupe">
                        <input type="text" placeholder='First Name' />
                        </div>      
                           <div className="email sigupe">
                        <input type="text" placeholder='last Name' />
                        </div>
                        <div className="tac">
                            <a>By continuing, you agree to Donatebox's Terms of Service & Privacy Policy</a>
                            <div className="btmm">
                            </div>
                        </div>
                </div>
                <div className="proceed">
                        <div className="proxx">
                        <MdNavigateNext  color='white' />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login