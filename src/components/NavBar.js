import React, { useState } from 'react'
import { MdMenu, MdOutlineClose } from "react-icons/md";

function NavBar (data){
    
    console.log(data.data.site.siteMetadata.navBar)

    function setNavOpen(e){
        console.log(e);
        
        if(navStatus === "open"){
          setNavStatus("close")
        }else{
           setNavStatus("open")
        }
        
      }

    const [navStatus, setNavStatus] = useState("close")

    return(
        
        <div className="header">
            <h1>HEADER</h1>
             <button id="btnNavControl" onClick={setNavOpen} className="btnNavControl"> 
                { navStatus === "close" && <MdMenu /> }
                { navStatus === "open" && <MdOutlineClose /> }
            </button>
            <ul className={navStatus + " menu"}>
            <li>Main nav links:</li>
        {
            data.data.site.siteMetadata.navBar.map((item) => {
                return <li key={item.id}><a href={data.url}>{item.name}</a></li>
            })
        }
            </ul>
        </div>
    )
}

export default NavBar
