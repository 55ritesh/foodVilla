import { useState } from "react";

const Section=({title,description,isVisible,setIsVisible})=>{

    // const [isVisible,setIsVisisble] = useState(false);
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>

            {
                isVisible?(
                    <button 
                onClick={()=> setIsVisible(false)}  className="cursor-pointer underline"
                >
                Hide
            </button>
                ):(
                    <button 
                onClick={()=> setIsVisible(true)}  className="cursor-pointer underline"
                >
                Show
            </button>
                )
            }

            {isVisible && <p>{description}</p>}
        </div>
    );
};



const Instamart=()=>{
     
    // const [sectionConfig,setSectionConfig] = useState({
    //     showAbout: false,
    //     showTeam: false,
    //     showCareers: false,
    //     showProduct:false,
    //     showDetails:false,
    // })
    const [visibleSection,setIsVisibleSection] = useState("team");
        
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"}
            description={"This is about section of Instamart"} 
            // isVisible={sectionConfig.showAbout}

            isVisible={visibleSection==="about"}
            setIsVisible={()=>setIsVisibleSection("about")}
        />
 
      <Section
       title={"Team Instamart"}
       description={
        "This is the tem section of Instamart. The team consist of 50      members..."
       }
    //    isVisible={sectionConfig.showTeam}
    isVisible={visibleSection==="team"}
    setIsVisible={()=>setIsVisibleSection("team")}
       />

<Section
       title={"Careers"}
       description={
        "This is the tem section of Instamart. The team consist of 50      members..."
       }
    //    isVisible={sectionConfig.showCareers}
    isVisible={visibleSection==="career"}
    setIsVisible={()=>setIsVisibleSection("career")}
    //    setIsVisible={()=>setSectionConfig(
    //     {
    //     showAbout: false,
    //     showTeam: false,
    //     showCareers: true,
    //     showProduct:false,
    //     showDetails:false,
    //    }
    //    )}
       />

     


       {/* <AboutInstaMart/>
       <DetailsofInstamart/>
       <TeamInstamart/>
       <Product/>
       <Careers/>  */}

        </div>
    );
};

export default Instamart;