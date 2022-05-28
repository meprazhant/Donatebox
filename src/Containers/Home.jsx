import React, { useEffect, useState } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import Carduser from "./Carduser";
import Data from "./CardData";


function Home() {
  const [userInfo,setUserinfo] = useState([])

  function setUsrr(){
    setUserinfo(Data)
  }

  useEffect(() =>
    setUsrr()
  )
  const userCardx = (val) =>{
    return(
      <Carduser
      image={val.image}
      desc={val.desc}
      fb = {val.facebook}
      ig = {val.instagram}
      gt = {val.github}
      key={val.index}

      />
    )
  }
  return (
    <div>
      <div className="contentImg">
        <h2>Lets Spread Happiness</h2>
        <a>
          Join Now <BsArrowRightSquareFill />
        </a>
        <div className="mouse"></div>
      </div>
      <div className="ats">
        <div className="top">
          <h2>About The Site</h2>
          <div className="tbs">
          </div>
        </div>
        <div className="atscontent">
          <div className="atsCard">
            <div className="bgimg">
            <img src="https://us.123rf.com/450wm/brovector/brovector2006/brovector200601740/148896606-happy-young-employees-giving-support-and-help-each-other.jpg?ver=6" alt="" />
            </div>
            <h2>Helping</h2>
            <p>Helping others improves social interaction, distracts people from their own problems, and improves self-esteem and competence. Physical Well-Being - helping others leads to increased social integration which allows people to lead more active lifestyles.</p>
          </div>
          <div className="atsCard">
            <div className="bgimg">
            <img src="https://demo.wpexperts.io/donation-product-for-woocommerce/wp-content/uploads/2020/12/volunteers-packing-donation-boxes_74855-5299.jpg" alt="" />
            </div>
            <h2>Donation & Charity</h2>
            <p>Raising money builds supports and momentum for your charity or cause in your community. It sends a message that many people are supporting you and your cause. It makes others stop and take notice and builds respect for what you believe in.</p>
          </div>
          <div className="atsCard">
            <div className="bgimg">
            <img src="https://cdn4.iconfinder.com/data/icons/work-scenarios/200/inspire-others-1-512.png" alt="" />
            </div>
            <h2>Inspiring Others</h2>
            <p>Your one donation or Fundraising can be an inpiration for others. Seeing you helping others also courages others to dionate an dhelp others never st5ep back from donaing others.</p>
          </div>
        </div>
      </div>
      <div className="ats">
      <div className="top">
          <h2>Teams</h2>
          <div className="tbs tbs2">
          </div>
        </div>
        <div className="atscontent">
        {userInfo.map(userCardx)}
        </div>
      </div>
    </div>
  );
}

export default Home;
