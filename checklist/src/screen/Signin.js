import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className="signContainer">
      <div className="signin-frame">
        <div className="description">
          <h1>Welcome Back</h1>
          <img src="/slide_images/Waving_hand_emoji.PNG.png" alt="" style={{ height: "30px" }} />
          <p>Today is a new day. It's your day. You shape it.<br />Sign in  to start managing your project.</p>
        </div>

        <div className="form-div">
          <form action="#" method="post" className="formsignup">
            <div className="form-box">
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="text" name="email" className="form-input" placeholder="Example@email.com" reqired />
            </div>
            <div className="form-box">
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" name="password" className="form-input" placeholder="At least 8 characters" required />
            </div>
            <div className="forgot-pass">
              <a href="#" className="forgot-pass-link">Forgot Password?</a>
            </div>
            <div>
              <input type="submit" value="SIGN IN" className="sign-btn" />
            </div>

            <div className="or-div">
              <div className="or-line">
              </div>
              <div className="or-txt">
                <p>Or</p>
              </div>
            </div>

            <div className="social-signin">
              <div className="social-acc">
                <img src="images/google.png" alt="#" className="social-acc-image" />
                <p>Sign in with Google</p>
              </div>
              <div className="social-acc">
                <img src="images/facebook.png" alt="#" className="social-acc-image" />
                <p>Sign in with Facebook</p>
              </div>
            </div>

            <div className="signup-div">
              <p>Don't You have an account?<Link to="/Signup" className="signup-link">Sign up</Link></p>
            </div>
          </form>

          <div className="footer-div">
            <p className="footer-txt">&copy; 2024 All RIGHTS RESERVED</p>
          </div>
        </div>

        <div className="image-div">
          <img src="checklist/src/images/sign.png" alt="#" className="sign-img" />
        </div>
      </div>
    </div>

  )
}

export default Signin