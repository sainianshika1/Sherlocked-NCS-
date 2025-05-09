// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });
  
  // Form validation and confirmation
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const eventType = form.querySelector("select").value;
  
    if (!name || !email || !eventType) {
      alert("Please fill in all fields correctly.");
      return;
    }
  
    alert(`Thanks ${name}! You are registered for the ${eventType} event.`);
    form.reset();
  });
  
  // Active menu item highlighting on scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
  
      if (scrollPos >= top && scrollPos <= bottom) {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  });