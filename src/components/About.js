import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";




class About extends Component{
    constructor(props){
        super(props);
       
        console.log("Parent-comp");
     }
    
    async componentDidMount(){
        // best place to api call
        console.log("Parent-componentDidMount");
    }

    render(){
        console.log("Parent -render");
        return(
            <div>
        <h1>About Us Page</h1>

        <UserContext.Consumer>
            {({user}) => <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
        </UserContext.Consumer>

        <p>This is the  React Live Course chap 07</p>
        {/* <Outlet/> */}
        {/* <Profile/> */}
       
        <Profile />
    </div>
        );
    }
}

export default About;