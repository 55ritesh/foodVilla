import { useState ,useEffect} from "react";
import { FETCH_MENU_URL } from "../contants";

const useRestaurant=(resId)=>{
   const [restaurant,setRestaurant] = useState(null);
   // get data from API
   useEffect(()=>{
    getRestaurantInfo();
},[]);

async function getRestaurantInfo(){
 const data = await fetch(FETCH_MENU_URL + resId);
 const json = await data.json();
 setRestaurant(json.data);
}

// return restraunt data
   return restaurant;
};

export default useRestaurant;  