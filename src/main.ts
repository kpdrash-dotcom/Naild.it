import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header class="header">

    <div class="left-menu">
        <button class="menu-btn">
            ☰ MENU
        </button>
    </div>

    <div class="center-logo">
        <img src="/images/logobag.png" alt="Naild.it">
    </div>

    <div class="right-icons">
        <button>⌕</button>
        <button>👜</button>
    </div>

</header>

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
            ABOUT US →
        </a>

    </div>

    <div class="hero-image">
  <img
    src="/images/tagimg.jpeg"
    alt="Naild.it"
  />
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

    <h2>Services</h2>

    <div class="service-grid">

        <div class="service-card">
            <h3>Gel Nails</h3>
            <p>Elegant, durable and glossy finishes.</p>
        </div>

        <div class="service-card">
            <h3>Acrylic Nails</h3>
            <p>Custom lengths and luxury styling.</p>
        </div>

        <div class="service-card">
            <h3>Nail Art</h3>
            <p>Minimalist to statement designs.</p>
        </div>

        <div class="service-card">
            <h3>Manicure & Pedicure</h3>
            <p>Complete nail care and relaxation.</p>
        </div>

    </div>

</section>

<section id="gallery" class="gallery">

    <h2>Gallery</h2>

    <div class="gallery-grid">

        <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80">

        <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80">

        <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80">

        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80">

    </div>

</section>

<section id="contact" class="contact">

    <h2>Book Your Appointment</h2>

    <p>
        Experience premium nail care designed around you.
    </p>

    <a href="#" class="hero-btn">
        CONTACT US →
    </a>

</section>
<footer class="footer">
    <div class="footer-logo">
        <img src="/images/logobag.png" alt="Naild.it">
    </div>

    <div class="footer-links">
        <a href="#">Instagram</a>
        <a href="#">TikTok</a>
        <a href="#">WhatsApp</a>
    </div>

    <p>© 2026 Naild.it. All rights reserved.</p>
</footer>
`;