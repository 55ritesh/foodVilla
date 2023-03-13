import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import  {addItem}  from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = ()=>{
    // how to read dynamic url
    // const params = useParams();
    const {resId} = useParams();
    // we can destruce it also
    // const {id}=params;
   // console.log(params); 
   //const [restaurant,setRestaurant]=useState(null);

   const restaurant = useRestaurant(resId);
   const dispatch = useDispatch();

//    const handleAddItem=()=>{
//     dispatch(addItem("Grapes"));
//    }

const addFoodItem=(item)=>{
    dispatch(addItem(item));
};


  
//    if(!restaurant){
//     return <Shimmer/>;
//    }


    return (!restaurant)?
    <Shimmer/>
    :(
        <div className="flex">
            <div>
            <h1>Restraunt id:{resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL +restaurant.cloudinaryImageId}/>
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
            </div>
            {/* <div>
                <button className="p-2 m-5 bg-green-100"
                onClick={()=>handleAddItem()}>Add Item</button>
            </div> */}
            <div className="p-5">
                <h1>Menu</h1>
                <ul data-testid="menu">{
                    Object.values(restaurant?.menu?.items).map((item)=>(
                    <li key={item.id}>
                        {item.name} -{" "}
                        <button 
                        data-testid="addBtn"
                        className="p-1 bg-green-50" 
                        onClick={()=>addFoodItem(item)}
                        >
                        Add
                        </button>
                    </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default RestrauntMenu;