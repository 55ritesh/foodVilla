import { IMG_CDN_URL } from "../contants";



            const FoodItem=({
                name,
                description,
                cloudinaryImageId,
                price,
            })=>{
              

            return(
                
                <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
                    <img src={IMG_CDN_URL+
                      cloudinaryImageId
                    }
                    /> 
                    <h2 className="font-bold text-2xl">{name}</h2>
                    <h3>{description}</h3>
                    <h4>Rupee: {price/100}</h4>
                </div>
            );
        };

        export default FoodItem;