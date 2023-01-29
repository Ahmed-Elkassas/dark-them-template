const nav = document.querySelector('nav')
const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon')
const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2')
const img3 = document.querySelector('#image3')

// Helper function 
function imageMode(color) {
    img1.src = `images/proud_coder_${color}.svg`;
    img2.src = `images/feeling_proud_${color}.svg`;
    img3.src = `images/conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    isDark ? imageMode('dark') : imageMode('light');
}

function changeTheme(event)  {
    if(event.target.checked) {
     document.documentElement.setAttribute('data-theme', 'dark');
     localStorage.setItem('theme', 'dark')
     toggleDarkLightMode(true)
    } else {
     document.documentElement.setAttribute('data-theme', 'light');
     localStorage.setItem('theme', 'light');
     toggleDarkLightMode(false)
    }
 }

switchToggle.addEventListener('change', changeTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        switchToggle.checked = true;
        toggleDarkLightMode(true)
    }
}
