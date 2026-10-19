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
            Luxury nail artistry for modern women.
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
        At Naild.it, we believe beautiful nails should be part of everyday life,
        not just special occasions.
        </p>

        <p>
        Our studio combines expert craftsmanship, premium products and elegant
        designs to create a luxury experience you'll want to return to again and again.
        </p>

    </div>

</section>

<section id="services" class="services">

    <div class="pricing-header">
        <h2>Trendings</h2>
    </div>


    <div class="service-grid">

    <a href="public/trending1.html" class="service-card">
        <h3>Gel Nails</h3>
        <p>Elegant, durable and glossy finishes.</p>
    </a>

    <a href="public/trending2.html" class="service-card">
        <h3>Acrylic Nails</h3>
        <p>Custom lengths and luxury styling.</p>
    </a>

    <a href="public/trending3.html" class="service-card">
        <h3>Nail Art</h3>
        <p>Minimalist to statement designs.</p>
    </a>

    <a href="public/trending4.html" class="service-card">
        <h3>Manicure & Pedicure</h3>
        <p>Complete nail care and relaxation.</p>
    </a>

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

        <h3>ADVANCED</h3>

        <div class="price-row">
            <span>3D Design</span>
            <span>Rs. 300-500</span>
        </div>

        <div class="price-row">
            <span>Charms (Per)</span>
            <span>Rs. 100</span>
        </div>

        <div class="price-row">
            <span>Bows (Per)</span>
            <span>Rs. 150</span>
        </div>

        <div class="price-row">
            <span>Rhinestone (Per)</span>
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

    <a href="#">
        Book Now 
    </a>

</section>

<section id="sizing" class="sizing">

    <div class="sizing-header">
        <p>NAILD.IT</p>
        <h2>Sizing Guide</h2>
        <span>Choose the sizing method that works best for you</span>
    </div>

    

    <div class="sizing-method">

        <div class="method-text">
            <h3>Soft Tape Measure</h3>

            <p>
                Place the measuring tape across the widest part of your nail.
                Use the millimeter scale and record the width of each nail.
            </p>

            <ul>
                <li>Most accurate method</li>
                <li>Uses a soft measuring tape</li>
                <li>Record all 10 nail measurements</li>
            </ul>
        </div>

        <div class="method-images">
            <img src="/images/tape-measure-1.png" alt="">
            <img src="/images/tape-measure-2.png" alt="">
        </div>

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
<section class="size-chart-section">

    <div class="size-chart-header">
        <h2>Standard Size Chart</h2>
        <p>
            Please be aware there is a 1mm room for error when measuring.
            If your measurements fall between sizes, choose the larger size.
        </p>
    </div>

    <div class="size-chart-wrapper">

        <table class="size-chart">

            <thead>
                <tr>
                    <th>Size</th>
                    <th>Thumb</th>
                    <th>Index</th>
                    <th>Middle</th>
                    <th>Ring</th>
                    <th>Pinky</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>L</td>
                    <td>17</td>
                    <td>13</td>
                    <td>14</td>
                    <td>13</td>
                    <td>11</td>
                </tr>

                <tr>
                    <td>M</td>
                    <td>16</td>
                    <td>12</td>
                    <td>13</td>
                    <td>12</td>
                    <td>10</td>
                </tr>

                <tr>
                    <td>S</td>
                    <td>15</td>
                    <td>11</td>
                    <td>12</td>
                    <td>11</td>
                    <td>9</td>
                </tr>

                <tr>
                    <td>XS</td>
                    <td>14</td>
                    <td>10</td>
                    <td>11</td>
                    <td>10</td>
                    <td>8</td>
                </tr>

            </tbody>

        </table>

    </div>

    <div class="chart-note">
        <p>
            Scale in millimeters (mm).
        </p>

        <p>
            Nail orders are final sale. Please ensure you choose the correct size before placing your order.
        </p>
    </div>

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
















const modal = document.getElementById("serviceModal")!;
const modalImg = document.getElementById("modalImg") as HTMLImageElement;
const modalTitle = document.getElementById("modalTitle")!;
const modalDesc = document.getElementById("modalDesc")!;
const closeModal = document.getElementById("closeModal")!;

document.querySelectorAll(".service-card").forEach(card => {

  card.addEventListener("click", () => {

    modalImg.src = card.getAttribute("data-img") || "";

    modalTitle.textContent =
      card.getAttribute("data-title") || "";

    modalDesc.textContent =
      card.getAttribute("data-desc") || "";

    modal.classList.add("active");

  });

});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});