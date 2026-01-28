// ==========================
// PROGRESS CIRCULAR BARS
// ==========================

function createProgress(progressSelector, valueSelector, endValue, color, speed) {
  const progress = document.querySelector(progressSelector);
  const valueText = document.querySelector(valueSelector);
  let startValue = 0;

  const interval = setInterval(() => {
    startValue++;
    valueText.textContent = `${startValue}%`;
    progress.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;
    if (startValue >= endValue) clearInterval(interval);
  }, speed);
}

// HTML & CSS
createProgress(".html-css", ".html-progress", 90, "#fca61f", 30);
// JavaScript
createProgress(".javascript", ".javascript-progress", 75, "#7d2ae8", 30);
// PHP
createProgress(".php", ".php-progress", 80, "#20c997", 30);
// ReactJS
createProgress(".reactjs", ".reactjs-progress", 30, "#3f396d", 30);


// ==========================
// PORTFOLIO FILTER
// ==========================
window.addEventListener("load", function() {
  const filterItems = document.querySelectorAll(".filter-item");
  const posts = document.querySelectorAll(".post");

  // Set first button as active
  if (filterItems.length > 0) filterItems[0].classList.add("active");

  filterItems.forEach(item => {
    item.addEventListener("click", function() {
      const value = this.dataset.filter.trim();
      
      // Active button
      filterItems.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Show/hide posts
      posts.forEach(post => {
        if (value === "all" || post.classList.contains(value)) {
          post.style.display = "block"; // FORCER l'affichage
        } else {
          post.style.display = "none";
        }
      });

      // Si tu utilises AOS pour les animations, refresh
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    });
  });
});


// ==========================
// STICKY NAVBAR
// ==========================
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-top');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top');
      const navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      navbar.classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    }
  });
});


// ==========================
// BACK TO TOP BUTTON
// ==========================
const mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
