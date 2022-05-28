import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { GiHeartOrgan } from "react-icons/gi";
import { BsFillDashCircleFill } from "react-icons/bs";
import { MdClearAll } from "react-icons/md";
import { BsFilterCircle } from "react-icons/bs";
import data from "./Dataproj";

import ProjectCard from "./ProjectCard";
import { render } from "@testing-library/react";

function Discovere() {
    var [dettt,setdet] =useState("All")
    var [searchText,setSearchtext] = useState("")
    var mapList = ""

  function getInput(e) {
    var clear = document.getElementById("clear");
    var searchitems = document.getElementById("searchitems")
    var pcitems = document.getElementById("pcitems")
      setfiltertext(e)
      if (!e){
         searchitems.style.display = 'none'
         pcitems.style.display = 'flex'
      }else{
         searchitems.style.display = 'flex'
         pcitems.style.display = 'none'

      }
  
      

  }
  function clearText() {
    var search = document.getElementById("search");
    search.value = "";
  }

  // const [postData, setpostData] = useState({})
  var postData = data;
  var datalen;

  function GETDATATA() {
    // setpostData(data)
  }

  // const filtereddata = data.filter(function(value){
  //     return value.tag = "charity"
  // })
  // console.log(filtereddata)
  var [filterText, setfiltertext] = useState("");
  var [filterlen, setfilterlen] = useState("");
  function filterItem(e) {
    setdet(e)
    toggleFilter();
    // setfilterlen(mapList.length)
    setfiltertext(e);
    // datalen = (data.length)
    getFiltertexttt();
  }
  
   mapList = data
    .filter((data) => {
      if (!filterText) {
        return data;
      }
      return data.tag.includes( `${filterText}`);
    })
    .map((val) => {
      return (
        <ProjectCard
          title={val.title}
          postby={val.postedby}
          shortdesc={val.shortdesc}
          time={val.time}
          tag={val.tag}
          key={val.no}
          imgurl={val.imgurl}

        />
      );
    });



    var searchList = data
    .filter((data) => {
      if (!filterText) {
        return data;
      }
      return data.shortdesc.includes( `${filterText}`);
    })
    .map((val) => {
      return (
        <ProjectCard
          title={val.title}
          postby={val.postedby}
          shortdesc={val.shortdesc}
          time={val.time}
          tag={val.tag}
          key={val.no}
          imgurl={val.imgurl}

        />
      );
    });


    function getFiltertexttt(){
       filterlen  = (mapList.length)
    }
var numm = 1
    function toggleFilter(){
        numm = numm+1
        var filter = document.getElementById('filters')
        if(numm%2==0){
            filter.style.display = 'flex'
        }else{
            filter.style.display = 'none'
        }
    }
  useEffect(() => GETDATATA());
  return (
    <div className="discover">
      <div className="disImage">
        <h2 onClick={() => (window.location.href = "/discover")}>
          Explore Projects
        </h2>
      </div>
      <div className="searchMenu">
          <div className="fsbar">
        <div className="searchBar">
          <FaSearch id="searchIcon" size={20} color="rgba(0, 0, 0, 0.417)" />
          <input
            id="search"
            onChange={(e) => getInput(e.target.value)}
            type="text"
            placeholder="Search Projects"
          />
          <MdClear onClick={clearText} id="clear" size={20} color="red" />
        </div>
        <div className="ficon" onClick={toggleFilter}>
          <BsFilterCircle size={30} />
        </div>
          </div>
        <div className="filters" id='filters'>
          <p>Filter Projects:</p>
          <a onClick={(e) => filterItem("")}>
            {" "}
            <MdClearAll color="red" /> All
          </a>
          <a onClick={(e) => filterItem(e.target.innerText)}>
            {" "}
            <FaHandsHelping color="green" /> Charity
          </a>
          <a onClick={(e) => filterItem(e.target.innerText)}>
            {" "}
            <MdProductionQuantityLimits color="blue" /> Products
          </a>
          <a onClick={(e) => filterItem(e.target.innerText)}>
            {" "}
            <MdBloodtype color="red" /> Blood
          </a>
          <a onClick={(e) => filterItem(e.target.innerText)}>
            {" "}
            <GiHeartOrgan color="brown" /> Medical
          </a>
          <a onClick={(e) => filterItem(e.target.innerText)}>
            {" "}
            <BsFillDashCircleFill color="orange" /> Lost
          </a>
        </div>
  
      </div>
      <div className="projdets">
        <h2>{dettt} Projects</h2>
        <p>
          Found <span>{filterlen}</span> Active projects
        </p>
      </div>
      <div className="pcitems" id="pcitems">
        {mapList}
      </div>
      <div className="pcitems" id="searchitems">
        {searchList}
      </div>
    </div>
  );
}

export default Discovere;
