import React from 'react';

function Signin() {
  return (
    <div class="login-form">
    <h1>Welcome Back 👋</h1>
    <p>Today is a new day. It's your day. You shape it.<br/>Sign in to start managing your projects.</p>
    
    <form action="/login" method="post">
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required minlength="8"/>
        <a href="#">Forgot Password?</a>
        
        <button type="submit">Sign In</button>
        
        <div class="social-login">
            <button type="button">Sign in with Google</button>
            <button type="button">Sign in with Facebook</button>
        </div>

        <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </form>

    <footer>© 2024 ALL RIGHTS RESERVED</footer>
</div>
  )
}

export default Signin