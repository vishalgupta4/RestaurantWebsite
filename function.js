document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("nav i");
  const navLinks = document.querySelector(".nav_links");

  menuIcon.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "block" ? "none" : "block";
  });

  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", smoothScroll);
  });

  const features = document.querySelectorAll(".feature");

  features.forEach((feature) => {
    feature.addEventListener("click", () => {
      const content = feature.querySelector(".feature_content");
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    });
  });

  const header = document.querySelector("header");
  const stickyClass = "sticky";
  const stickyHeader = () => {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add(stickyClass);
    } else {
      header.classList.remove(stickyClass);
    }
  };

  window.addEventListener("scroll", stickyHeader);

  const exploreBtn = document.querySelector(".explore_btn");
  const dynamicContent = document.querySelector(".dynamic_content");

  exploreBtn.addEventListener("click", () => {
    dynamicContent.innerHTML = `
        <h3>New Special Offer!</h3>
        <p>We have updated our menu with exciting new dishes. Check them out and enjoy a special discount!</p>
      `;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.createElement("div");
  dateElement.className = "date_time";
  document.querySelector("header").appendChild(dateElement);

  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    dateElement.textContent = now.toLocaleDateString("en-US", options);
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".grid-image, .feature img");
  const textContainer = document.createElement("div");
  textContainer.className = "text_overlay";
  document.body.appendChild(textContainer);

  images.forEach((img) => {
    img.addEventListener("click", function () {
      const text = this.getAttribute("data-text");
      textContainer.textContent = text;
      textContainer.style.display = "block";

      setTimeout(() => {
        textContainer.style.display = "none";
      }, 3000);
    });
  });
});
