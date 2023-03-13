import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title=()=> (
    <a href="/" >
 <img data-testid="logo"
 className="h-28 px-2" 
 alt="logo"
//  src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
src={Logo}/>
 </a>
);

// composing component
const Header=()=>{
  
    const [isLogeedIn,setIsLogeedIn]=useState(false);

    const isOnline = useOnline();

     const  {user}  = useContext(UserContext);
     
     const cartItems = useSelector(store => store.cart.items);


    return (
    <div className="flex justify-between bg-white-50 shadow-lg sm:bg-blue-50 md:bg-white-50">
        <Title/>
        <div className="nav-items">
            <ul className="flex py-10">
                <Link to="/" className="py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300">
                     <li className="px-4">Home</li>
                </Link>
                <Link to="/about" className="py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300">
                     <li className="px-2">About</li>
                </Link>
                <Link to="/contact" className="py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300">
                     <li className="px-2">Contact</li>
                </Link>
                <Link to="/instamart" className="py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300">
                     <li className="px-2">Instamart</li>
                </Link>
               <Link to="/cart" className="py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300">
                <li className="px-2" data-testid="cart">Cart- {cartItems.length} items</li>
                </Link>
            </ul>
        </div>
        <h1 data-testid="online-status">{ isOnline ?'✅': '🔴'}</h1>
          
        {
             isLogeedIn?(
             <button onClick={()=>setIsLogeedIn(false)} className="py-2 px-2 pr-2 bg-green-400 rounded-2xl text-white">Logout</button>
             ):(
             <button onClick={()=>setIsLogeedIn(true)} className="py-2 px-2 pr-2 bg-green-400 rounded-2xl text-white">Login</button>
        )}
        
    </div>
    );
};

export default Header;