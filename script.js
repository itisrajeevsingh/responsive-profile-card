/* =========================
   PROFILE DATA (Data Driven)
========================= */

const profile = {
    name: "Rajeev Ranjan Singh",
    role: "Frontend Developer",
    bio: "Passionate about building responsive and user-friendly web applications.",
    socials: {
      linkedin: "https://www.linkedin.com/in/itisrajeevsingh",
      github: "https://github.com/itisrajeevsingh",
      twitter: "https://twitter.com/itisrajeevsingh"
    }
  };
  
  
  // Inject profile data into DOM
  document.getElementById("profileName").textContent = profile.name;
  document.getElementById("profileRole").textContent = profile.role;
  document.getElementById("profileBio").textContent = profile.bio;
  
  
  /* =========================
     DARK MODE TOGGLE
  ========================= */
  
  const toggleBtn = document.getElementById("themeToggle");
  
  // Load saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
  
  
  /* =========================
     EXPAND / COLLAPSE CONTACT FORM
  ========================= */
  
  const contactBtn = document.getElementById("contactBtn");
  const contactForm = document.getElementById("contactForm");
  
  contactBtn.addEventListener("click", () => {
    if (contactForm.style.display === "flex") {
      contactForm.style.display = "none";
    } else {
      contactForm.style.display = "flex";
    }
  });
  
  
  /* =========================
     FORM VALIDATION
  ========================= */
  
  const submitBtn = document.querySelector(".submit-btn");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");
  const errorMsg = document.getElementById("errorMsg");
  
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
  
    // Check empty fields
    if (!email || !message) {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Please fill all fields.";
      return;
    }
  
    // Email pattern validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!email.match(emailPattern)) {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Please enter a valid email.";
      return;
    }
  
    // Success
    errorMsg.style.color = "green";
    errorMsg.textContent = "Message sent successfully!";
  
    // Clear inputs
    emailInput.value = "";
    messageInput.value = "";
  });
  
  
  /* =========================
     RIPPLE EFFECT
  ========================= */
  
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
  
      const rect = button.getBoundingClientRect();
      ripple.style.left = e.clientX - rect.left + "px";
      ripple.style.top = e.clientY - rect.top + "px";
  
      this.appendChild(ripple);
  
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  