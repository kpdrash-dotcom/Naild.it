import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `



<header class="header">

    <div class="left-menu">
        <button id="menu-btn" class="menu-btn">
    ☰ MENU
</button>

    </div>

    <div class="center-logo">
        <img src="/images/logobag.png" alt="Naild.it">
    </div>

    <div class="right-icons">
    
</div>
</div>

</header>







<div id="side-menu" class="side-menu">

    <button id="close-menu" class="close-menu">✕</button>

    <div class="menu-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
    </div>

    <div class="menu-footer">
        <p>© 2026 Naild.it</p>
        <p>All Rights Reserved.</p>
    </div>

</div>







<section class="hero">
    <div class="hero-text">

        <p class="small-text">
            A little romance, designed for you.
        </p>

        <h1>
            Considered designs,<br>
            quality finishes<br>
            and timeless beauty.
        </h1>

        <a href="#about" class="hero-btn">
            ABOUT US
        </a>

    </div>

    <div class="hero-image">
  <div class="slideshow">
    <img src="/images/tagimg.jpeg" class="slide active" alt="Nail Design 1">
    <img src="/images/tagimg2.jpeg" class="slide" alt="Nail Design 2">
    <img src="/images/tagimg3.jpeg" class="slide" alt="Logo">
    <img src="/images/tagimg4.jpeg" class="slide" alt="Nail Design 3">
  </div>
</div>
</div>

</section>

<section id="about" class="about">

    <div class="section-content">

        <p>
        We believe beauty lies in the little details…
        Each set of press-on nails is designed with a touch of effortless elegance.
        From delicate details to graceful designs,
        
        </p>

        <p>
        Every set is made to make you feel pretty and effortlessly chic.
        Bringing a little romance to your everyday beauty.
        </p>

    </div>

</section>








<section class="new-arrivals">

    <div class="section-header">
        <div>
            <span class="subtitle">Top Trendings</span>
            <h2>Desi Nails</h2>
        </div>

        <a href="trending1.html" class="view-all-btn">
            VIEW MORE
        </a>
    </div>

    <div class="products-grid">

        <!-- Product 1 -->
        <div class="product-card">
            <span class="discount-badge">20% OFF</span>
            <img src="/images/desi1.jpeg" alt="">
            <h3>Ruby Bloom</h3>
        </div>

        <!-- Product 2 -->
        <div class="product-card">
            <span class="discount-badge">20% OFF</span>
            <img src="/images/desi2.jpeg" alt="">
            <h3>Emerald Glow</h3>
        </div>

        <!-- Product 3 -->
        <div class="product-card">
            <span class="discount-badge">20% OFF</span>
            <img src="/images/desi3.jpeg" alt="">
            <h3>Golden Rose</h3>
        </div>

        

    </div>
    <div class="section-header">
        <div>
            
            <h2>Bedazzled Nails</h2>
        </div>

        <a href="trending2.html" class="view-all-btn">
            VIEW MORE
        </a>
    </div>

    <div class="products-grid">

        <!-- Product 1 -->
        <div class="product-card">
            <span class="discount-badge">20% OFF</span>
            <img src="/images/Bedazzled1.jpeg" alt="">
            <h3>Ruby Bloom</h3>
        </div>

        <!-- Product 2 -->
        <div class="product-card">
            <span class="discount-badge">20% OFF</span>
            <img src="/images/Bedazzled2.jpeg" alt="">
            <h3>Emerald Glow</h3>
        </div>

        <!-- Product 3 -->
        <div class="product-card">
            <span class="discount-badge">20% OFF</span>
            <img src="/images/Bedazzled3.jpeg" alt="">
            <h3>Golden Rose</h3>
        </div>

        

    </div>

</section>
<section id="sizing" class="sizing">

    <div class="sizing-header">
        <p>NAILD.IT</p>
        <h2>Sizing Guide</h2>
        <span>Choose the sizing method that works best for you</span>
    </div>


    <div class="sizing-method">

        <div class="method-text">
            <h3>Coin Method</h3>

            <p>
                Send two clear photos with a Sri Lankan Rs.2 coin beside
                your nails. Photos should be taken directly from above.
            </p>

            <ul>
                <li>Quick and convenient</li>
                <li>Perfect if no tape measure is available</li>
                <li>Use a clear overhead photo</li>
            </ul>
        </div>

        <div class="method-images">
            <img src="/images/coin-method-1.png" alt="">
            <img src="/images/coin-method-2.png" alt="">
        </div>

    </div>

</section>

<section id="services" class="pricing">

    <div class="pricing-header">
        <p>NAILD.IT</p>
        <h2>Price List</h2>
    </div>

    <div class="tier">

        <h3>BASIC</h3>

        <div class="price-row">
            <span>Simple Color Polish</span>
            <span>Rs. 1800</span>
        </div>

        <div class="price-row">
            <span>French Tips (Per Nail)</span>
            <span>Rs. 250</span>
        </div>

    </div>

    <div class="tier">

        <h3>INTERMEDIATE</h3>

        <div class="price-row">
            <span>Ombre</span>
            <span>Rs. 250</span>
        </div>

        <div class="price-row">
            <span>Chrome</span>
            <span>Rs. 350</span>
        </div>

        <div class="price-row">
            <span>Minimalist Line Art</span>
            <span>Rs. 250</span>
        </div>

        <div class="price-row">
            <span>Marble</span>
            <span>Rs. 350</span>
        </div>

        <div class="price-row">
            <span>Negative Space</span>
            <span>Rs. 250</span>
        </div>

        <div class="price-row">
            <span>Animal Print</span>
            <span>Rs. 250</span>
        </div>

        <div class="price-row">
            <span>Abstract Print</span>
            <span>Rs. 250</span>
        </div>

    </div>

    <div class="tier">

        <h3>ADVANCED (Per Nail)</h3>

        <div class="price-row">
            <span>3D Design</span>
            <span>Rs. 300-500</span>
        </div>

        <div class="price-row">
            <span>Charms</span>
            <span>Rs. 100</span>
        </div>

        <div class="price-row">
            <span>Bows</span>
            <span>Rs. 150</span>
        </div>

        <div class="price-row">
            <span>Rhinestone</span>
            <span>Rs. 100</span>
        </div>

    </div>

</section>
<section id="contact" class="contact">

    <h2>Book Your Appointment</h2>

    <p>
        Experience luxury nail artistry designed around your style.
        Secure your appointment today and let Naild.it create your perfect set.
    </p>

    <a href="https://wa.me/94713119127">
        Book Now 
    </a>

</section>
<footer class="footer">
    <div class="footer-logo">
        <img src="/images/logobag.png" alt="Naild.it">
    </div>

    <div class="footer-links">

  <a href="https://instagram.com/yourpage">
    <img src="/images/instagram.png" class="instagram-icon" alt="Instagram">
  </a>

  

  <a href="https://wa.me/94713119127">
    <img src="/images/whatsapp.png" class="whatsapp-icon" alt="WhatsApp">
  </a>

</div>

    <p>© 2026 Naild.it. All rights reserved.</p>
</footer>
`;


const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
}, 3000);
















/* =========================
   MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");

menuBtn?.addEventListener("click", () => {
  sideMenu?.classList.add("active");
  overlay?.classList.add("active");
});

closeMenu?.addEventListener("click", () => {
  sideMenu?.classList.remove("active");
  overlay?.classList.remove("active");
});

overlay?.addEventListener("click", () => {
  sideMenu?.classList.remove("active");
  overlay?.classList.remove("active");
});

document.querySelectorAll(".menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu?.classList.remove("active");
    overlay?.classList.remove("active");
  });
});
