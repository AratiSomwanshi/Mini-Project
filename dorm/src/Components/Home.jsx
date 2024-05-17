import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import {  useState } from "react";
import "./home.css";
import {format} from "date-fns";
export function Home() {
  const [openDate, setOpenDate]= useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);



  const [openOpstion, setOpenOpstion]= useState(false);
  const [opstions, setOpstions] = useState({
    adult:1,
    Children:0,
    room:1,
  });


  const handleOpstion=(name, opration)=>{
    setOpstions(prev=>{return {
      ...prev,[name]:opration==="i" ? opstions[name ]+1: opstions[name]-1,
    };
  });
  };
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerList">
          <div className="headerSearch">


            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} classNam="headericon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
            </div>



            <div className="headersearchItem">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span onClick={()=>setOpenDate(!openDate)} className="headersearchText"> {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
            {
              openDate &&   <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
            }
            </div>





{/* this repetade call we can create container and pass value */}

            <div className="headersearchItem">
              <FontAwesomeIcon icon={faPerson} />

              <span onClick={()=>setOpenOpstion(!openOpstion)}
              className="headersearchText"> {`${opstions.adult} adult. ${opstions.Children}Children . ${opstions.room}room`}</span>
           {openOpstion && 
              <div className="opstions">
               
                <div className="opstionItem">
                  <span className="opstionText">Adult</span>
                  <div className="opstionCounter">
                  </div>

                  <button disabled={opstions.adult<=0}
                  
                  className="opstionCounterButton" onClick={()=>handleOpstion("adult","d")}>-</button>
                  <span className="opstionCounterNumber">{opstions.adult}</span>
                  <button className="opstionCounterButton" onClick={()=>handleOpstion("adult","i")}>+</button>
                </div>

                <div className="opstionItem">
                  <span className="opstionText">Children</span>

                  <div className="opstionCounter">

                  </div>
                  <button disabled={opstions.Children<=0}
                   className="opstionCounterButton" onClick={()=>handleOpstion("Children","d")}>-</button>
                  <span className="opstionCounterNumber">{opstions.Children}</span>
                  <button className="opstionCounterButton" onClick={()=>handleOpstion("Children","i")}>+</button>
                </div>

                <div className="opstionItem">
                  <span className="opstionText">room</span>

                  <div className="opstionCounter">

                  </div>
                  <button disabled={opstions.room<=0}
                   className="opstionCounterButton" onClick={()=>handleOpstion("room","d")}>-</button>
                  <span className="opstionCounterNumber">{opstions.room}</span>
                  <button className="opstionCounterButton" onClick={()=>handleOpstion("room","i")}>+</button>
                </div>

                </div>}
                </div>

                <div className="headersearchItem">
                <button className="headerBtn">Search</button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
