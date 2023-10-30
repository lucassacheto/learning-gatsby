import React from 'react'

function NavBar (data){
    console.log(data.data.site.menu)
    return(
        <ul>
         <li>Main nav links:</li>
       {
        
        data.data.site.menu.map((item) => {
            return <li key={item.id}>{item.name}</li>
        })

       }
       
        </ul>
    )
}

export default NavBar
