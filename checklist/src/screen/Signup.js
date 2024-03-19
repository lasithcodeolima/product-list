import React from "react";
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="signContainer">
            <div className="signup-image-div">
                <img src="checklist/src/images/sign.png" alt="#" className="signup-img"/>
            </div>
            <div className="signup-form">

                <div className="description">
                    <h1>Create a new Account</h1>
                    <p>
                    Today is a new day. It's your day. You shape it.<br/>Sign in to start buy your items as you want.
                    </p>
                </div>

                <div>
                    <form action="#" method="post" className="formsignup">
                        <div class="form-box">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text" id="fname" name="fname" className="form-input" placeholder="Enter Your First Name" required/>
                        </div>
                        <div class="form-box">
                            <label htmlFor="lname" className="form-label">Last Name</label>
                            <input type="text" id="lname" name="lname" className="form-input" placeholder="Enter Your Last Name" required/> 
                        </div>
                        <div className="form-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-input" placeholder="Example@email.com" required/>                    
                        </div>
                        <div className="form-box">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" name="password" className="form-input" placeholder="At least 8 characters" required/>
                        </div>
                        <div className="form-box">
                            <label htmlFor="reEnterPassword">Re Enter Password</label>
                            <input type="password" name="reEnterPassword" className="form-input" placeholder="At least 8 characters" required/>
                        </div>
                        <div>
                        <Link to="/Signin" className="signup-link"><input type="submit" value="SIGN UP" className="sign-btn"/></Link>
                        </div>
                    </form>
                </div>

                <div className="footer-div">
                    <p className="footer-txt">&copy; 2024 All RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
    
    )
}

export default Signup
