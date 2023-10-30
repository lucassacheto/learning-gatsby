import React from "react";
import '../styles/global.css';
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout ({children, data}){
    return (
        <div className="layout">
            <NavBar data={data} />
            <main className="content">
                <main>
                    {children}
                </main>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;