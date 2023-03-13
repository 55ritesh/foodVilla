import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
// const RestrauntCard=(props)=>{
        // destructuring the object
        // const RestrauntCard=({restaurant})=>{
            const RestrauntCard=({name,cuisines,cloudinaryImageId,avgRating})=>{
                // destructuring object
            // const {name,cuisines,cloudinaryImageId,lastMileTravelString} = restaurant.data;

            const{user}=useContext(UserContext);
            return(
                
                <div className="w-56 p-2 m-2 shadow-2xl hover:scale-105 border-4 bg-pink-50 rounded-lg">
                    <img src={IMG_CDN_URL+
                      cloudinaryImageId
                    }
                    /> 
                    {/* <h2>{props.restaurant.data?.name}</h2> */}
                    {/* <h2>{restaurant.data?.name}</h2> */}
                    <h2 className="font-bold text-2xl">{name}</h2>
                    <h3>{cuisines.join(", ")}</h3>
                    <h4>{avgRating}⭐</h4>
                    <h5 className="font-bold">{user.name} - {user.email}</h5>
                </div>
            );
        };

        export default RestrauntCard;