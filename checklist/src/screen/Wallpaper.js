import React from "react";
import Navbar from "../components/Navbar";

function Wallpaper(){
    return (
<div className="wallpaperPage">

    <Navbar/>

    <div className="banner">
        <img src="abc.png" alt="banner image"/>
    </div>

    <div className="images">
        <img src="img1.png" atl="img1"/>
        <img src="img1.png" atl="img1"/>
        <img src="img1.png" atl="img1"/>
        <img src="img1.png" atl="img1"/>
    </div>

    <div className="more-button">
        <input type="button" value={"more"}/>
    </div>

</div>
    )
}

export default Wallpaper

