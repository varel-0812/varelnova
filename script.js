// NAVBAR BLUR
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-blur", window.scrollY > 50);
});

// FADE IN
const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
elements.forEach(el => observer.observe(el));

// IMAGE MODAL
const modal = document.createElement("div");
modal.className = "fixed inset-0 bg-black/80 hidden flex items-center justify-center z-50";
modal.innerHTML = `<img class="max-w-3xl rounded-xl">`;
document.body.appendChild(modal);

document.querySelectorAll(".gallery-img").forEach(img => {
  img.onclick = () => {
    modal.querySelector("img").src = img.src;
    modal.classList.remove("hidden");
  };
});

modal.onclick = () => modal.classList.add("hidden");

// CUSTOM CURSOR
const cursor = document.getElementById("cursor");
const blur = document.getElementById("cursor-blur");

window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  blur.style.left = e.clientX - 150 + "px";
  blur.style.top = e.clientY - 150 + "px";
});

// 3D CARD INTERACTION
document.querySelectorAll(".hover-3d").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const rotateX = ((y / rect.height) - 0.5) * 10;
      const rotateY = ((x / rect.width) - 0.5) * -10;
  
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });

  // TYPING EFFECT
const text = "Mahasiswa | Web Designer | Front-End Developer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

// RIPPLE BUTTON
document.querySelectorAll(".btn-primary").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const span = document.createElement("span");
      const rect = this.getBoundingClientRect();
  
      span.style.left = e.clientX - rect.left + "px";
      span.style.top = e.clientY - rect.top + "px";
  
      this.appendChild(span);
  
      setTimeout(() => span.remove(), 600);
    });
  });

  // FORM SUBMIT FEEDBACK
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  form.innerHTML = `
    <h3 class="text-center text-2xl font-bold text-green-400">
      Pesan berhasil dikirim 🚀
    </h3>
  `;
});

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-purple-400");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-purple-400");
    }
  });
});

/* =====================
   GLOW FOLLOW MOUSE
===================== */
document.querySelectorAll(".glow-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });

  /* =====================
   MEDIA CLICK FEEDBACK
===================== */
document.querySelectorAll(".media-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.add("scale-95");
      setTimeout(() => {
        card.classList.remove("scale-95");
      }, 120);
    });
  });
  
  /* =====================
     IMAGE POP EFFECT
  ===================== */
  document.querySelectorAll(".image-card img").forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("zoomed");
    });
  });