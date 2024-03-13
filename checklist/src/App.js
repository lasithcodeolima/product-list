import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">U Fashion</a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#men">Men</a>
          <a href="#woman">Woman</a>
          <a href="#kids">Kids</a>
          <a href="#about">AboutUs</a>
        </nav>
      </header>
      <body>
      <div className="container">
        {/* mens section */}
      <section id="men" className="section">
  <h2>Men's Collection</h2>
  <div className="photos">
    <div class="item">
      <img src="D:/CodeOlima/product-list/checklist/mens1.jpg" alt="Men's Fashion 1" />
      <div class="details">
        <p>Price: $49.99</p>
      </div>
    </div>
    <div class="item">
      <img src="men2.jpg" alt="Men's Fashion 2" />
      <div class="details">
        <p>Price: $59.99</p>
      </div>
    </div>
    <div class="item">
      <img src="men3.jpg" alt="Men's Fashion 3" />
      <div class="details">
        <p>Price: $69.99</p>
      </div>
    </div>
  </div>
  <p><a href="#">See More</a></p>
</section>

{/* womans section */}
<section id="woman" className="section">
  <h2>Woman's Collection</h2>
  <div className="photos">
    <div class="item">
      <img src="men1.jpg" alt="Men's Fashion 1" />
      <div class="details">
        <p>Price: $49.99</p>
      </div>
    </div>
    <div class="item">
      <img src="men2.jpg" alt="Men's Fashion 2" />
      <div class="details">
        <p>Price: $59.99</p>
      </div>
    </div>
    <div class="item">
      <img src="men3.jpg" alt="Men's Fashion 3" />
      <div class="details">
        <p>Price: $69.99</p>
      </div>
    </div>
  </div>
  <p><a href="#">See More</a></p>
</section>

{/* kids section */}
<section id="kids" className="section">
  <h2>Kid's Collection</h2>
  <div className="photos">
    <div class="item">
      <img src="men1.jpg" alt="Men's Fashion 1" />
      <div class="details">
        <p>Price: $49.99</p>
      </div>
    </div>
    <div class="item">
      <img src="men2.jpg" alt="Men's Fashion 2" />
      <div class="details">
        <p>Price: $59.99</p>
      </div>
    </div>
    <div class="item">
      <img src="men3.jpg" alt="Men's Fashion 3" />
      <div class="details">
        <p>Price: $69.99</p>
      </div>
    </div>
  </div>
  <p><a href="#">See More</a></p>
</section>

{/* About us*/}
<section id="about" className="section">
  <h2>About Us</h2>
  <p>Learn more about our brand and mission.</p>
  <div className="about-details">
    <p>U Fashion is a leading retailer of trendy clothing...</p>
    <p>Address: 123 Abc, Colombo, Sri Lanka.</p>
    <p>Email: info@ufashion.com</p>
    <p>Phone: +1234567890</p>
  </div>
  <div className="socialmedia">
    <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
   
  </div>
</section>

<footer>
  <p>&copy; 2024 U Fashion. All rights reserved.</p>
</footer>

      </div>
    </body>
    </div>
  );
}

export default App;
