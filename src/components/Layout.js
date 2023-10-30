import React from "react";
import '../styles/global.css';
import NavBar from "./NavBar";

function Layout ({children, data}){
    return (
        <div className="layout">
            <NavBar data={data} />
            <div className="content">
                <main>
                    <h1>
                        {children}
                    </h1>
                </main>
            </div>
        </div>

    )
}

export default Layout;