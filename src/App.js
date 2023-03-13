import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";




// const Instamart = lazy(()=>import("./components/Instamart"));

/**
                 Header
                  -Logo{title}
                  -List Items(Right side)
                  -cart
                 Body
                     - Search bar
                     -RestrauntList
                      -RestrauntCard
                        -Image
                        -Name
                        -Rating
                        -Cusiness
                 Footer
                   -links
                   -Copyrights
*/



    // const config=[
    //     {
    //         type:"carousel",
    //         cards:[
    //         {
    //             offerName:"50% off"
    //         },
    //         {
    //             offerName:"No Delivery charge"
    //         },
    //       ],
    //     },
    //     {
    //         type:"restaurants",
    //         cards:[
    //             {
    //                 name:"Burger King",
    //                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b1nbyfvq3wbrcpzbqpmu",
    //                 cusines:["Burger","American"],
    //                 rating:"4.2"
    //             },
    //             {
    //                 name:"KFC",
    //                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b1nbyfvq3wbrcpzbqpmu",
    //                 cusines:["Burger","American"],
    //                 rating:"4.2"
    //             }
    //     ]
    //     }
    // ]

    

    const Applayout=()=>{

        const [user,setUser] = useState({
            name:"Ritesh Kumar",
            email: "support@gmail.com",
        });

        return (
            <Provider store={store}>
               <UserContext.Provider
                value={{
                    user:user,
                    setUser:setUser,
                }}
                > 
                <Header/>
                <Outlet/>
                <Footer/>
                 </UserContext.Provider>  
                 </Provider>

        );
    };
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Applayout/>,
            errorElement: <Error/>,
            children:[
                {
                    path: "/",
                    element:<Body/>,
                },
                {
                    path: "/about",
                    element:<About/>,
                    children:[
                        {
                        path:"profile",
                        element:<Profile/>,
                        }

                    ]
                },
                {
                    path:"/",
                    element:<Body/>,
                },

                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/restaurant/:resId",
                    element:<RestrauntMenu/>,
                },
                {
                    path:"/instamart",
                    element:<Suspense fallback={<Shimmer/>}
                    ><Instamart/></Suspense>,
                },
                {
                    path:"/cart",
                    element: <Cart/>,
                }
            ],
        },
    ]);
    
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout/>);
root.render(<RouterProvider router={appRouter}/>);












































































// const heading=React.createElement(
//         "h1",
//         {
//             id:"title",
//             key:"h1"
//         },
//         "heading 1"
//     );








    // React.createElement = object = HTML(DOM)

    // console.log(heading);

    // const heading2=React.createElement(
    //     "h1",
    //     {
    //         id:"title",
    //         key:"h2"
    //     },
    //     "heading 2"
    // );

        // <div class="header">
        //  <h1>Namaste</h1>
        //  <ul>
        //     <h1>home</h1>
        //     <h1>about</h1>
        //     <h1>contact</h1>
        //  </ul>
        //  </div>

    // const container=React.createElement(
    //     "div",
    //     {
    //         id:"container",
    //         hello:"world"
    //     },
    //     [React.createElement(
    //         "h1",
    //         {
    //             id:"title",
    //             key:"h1"
    //         },
    //         "heading 1"
    //     ),
    //     React.createElement("ul",{},[React.createElement(
    //             "l1",
    //             {},
    //             "About us"
    //         ), React.createElement("ul",{},[React.createElement(
    //             "l1",
    //             {},
    //             "About us"
    //         )]),
    // )


// //    <script>
// //     // const heading=React.createElement("h1",{},"hello");
// //     // 
// //     // root.render(heading);

// //     const heading1=React.createElement(
// //         "h1",
// //         {
// //             id:"title"
// //         },
// //         "heading 1"
// //     );

// //     const heading2=React.createElement(
// //         "h1",
// //         {
// //             id:"title"
// //         },
// //         "heading 2"
// //     );
// //     const container=React.createElement(
// //         "div",
// //         {
// //             id:"container"
// //         },
// //         [heading1,heading2]
// //     );
// //     root.render(heading);

// <!-- </script> -->