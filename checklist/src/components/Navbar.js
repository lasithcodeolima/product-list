import React from "react";

function Navbar(){
    return (
        <div className="navbar">
    <div>
    <a href="#"><img src="logo.png" className="logo"/></a>

    <div>
    <img src="search.png" className="search-icon"/>
    <input type="text" placeholder="Search"/>
    </div>

    <a href="#"><img src="profile.png" className="profile"/></a>
    </div>

    <div>
    <a href="#wallpaper">Wallpaper</a>
    <a href="#animation">Animation</a>
    <a href="#notification">Notification</a>
    </div>
    
        </div>
    )
}

export default Navbar