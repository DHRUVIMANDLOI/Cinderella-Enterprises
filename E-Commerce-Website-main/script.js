let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

// --- Dark Mode Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const themeKey = 'theme';
    const darkThemeValue = 'dark-mode';
    const lightThemeValue = 'light-mode'; // Represents the absence of dark-mode class

    // Function to apply the theme and update the toggle icon
    function applyTheme(theme) {
        if (theme === darkThemeValue) {
            body.classList.add(darkThemeValue);
            if (darkModeToggle) {
                darkModeToggle.classList.remove('fa-moon');
                darkModeToggle.classList.add('fa-sun');
            }
        } else {
            body.classList.remove(darkThemeValue);
            if (darkModeToggle) {
                darkModeToggle.classList.remove('fa-sun');
                darkModeToggle.classList.add('fa-moon');
            }
        }
    }

    // Event listener for the toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (body.classList.contains(darkThemeValue)) {
                applyTheme(lightThemeValue); // Switch to light
                localStorage.setItem(themeKey, lightThemeValue);
            } else {
                applyTheme(darkThemeValue); // Switch to dark
                localStorage.setItem(themeKey, darkThemeValue);
            }
        });
    }

    // Check for saved theme preference on page load
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    } // Otherwise, it defaults to light mode (no class on body)
});
