import {restrauntlist} from "../contants";
import RestrauntCard from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Component } from "react";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import CoverImage from "../assets/img/poster.jpg";

// body js is seach header 

const Body = ()=>{
      
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {user,setUser} = useContext(UserContext);
      
  //  const [searchClicked,setSearchClicked] = useState("false");

  useEffect(()=>{
    // API call
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9146308&lng=80.9434371&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

console.log("render");

const isOnline  = useOnline();

if(!isOnline){
  return <h1>🔴Offline, please check your internet connection !!</h1>
}

//conditional rendering
// if restraunt is empty =>shimmer UI
// if restraunt has dat => actual data UI


// not render component(early return)
if(!allRestaurants) 
return null;

// if(filteredRestaurants?.length=== 0) return <h1>No Restaurant match your filter</h1>

    return allRestaurants.length === 0?(
    <Shimmer/>
    )
    :(
        <>
        <div className=" p-16 " style={{ backgroundImage: `url(${CoverImage})` }}>
        <div className="m-7 font-mono text-black">
            <input 
            data-testid="search-input"
            type="text" 
            // className="search-input" 
            className="w-[450px] border-2 border-solid p-2 rounded-l-full"
            placeholder="Search" 
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
               
            }}
            />
            
            <button 
            data-testid="search-btn"
            className="bg-green-900 rounded-r-full p-2 m-1"
            onClick={()=>{
              // need to filter the data(restrolist)
             const data= filterData(searchText,allRestaurants);
              // update the state-restaurants variable
              setFilteredRestaurants(data); 
          }}>
                Search 
            </button>
            {/* <input value={user.name} onChange={
              e=>setUser({
                name: e.target.value,
                email: "newemail@gmail.com",
              })
            }></input> */}
        </div>
        </div>

        <div className="px-11 flex flex-wrap justify-center" data-testid="res-list">
            {
                filteredRestaurants.map(restaurant=>{
                    return (
                      <Link to={"/restaurant/"+restaurant.data.id}
                      key={restaurant.data.id}>
                        <RestrauntCard{...restaurant.data} />
                      </Link>);
                })
            }
      {/* <RestrauntCard restaurant={restrauntlist[0]}/> */}
      {/* <RestrauntCard {...restrauntlist[0].data}/>
      <RestrauntCard {...restrauntlist[1].data}/>
      <RestrauntCard {...restrauntlist[2].data}/>
      <RestrauntCard {...restrauntlist[3].data}/>
      <RestrauntCard {...restrauntlist[4].data}/> */}
      
    {/* //   <RestrauntCard restaurant={restrauntlist[1]}/>
    //   <RestrauntCard restaurant={restrauntlist[2]}/>
    //   <RestrauntCard restaurant={restrauntlist[3]}/>
    //   <RestrauntCard restaurant={restrauntlist[4]}/> */}
      </div>
      </>
    );
};
export default Body;