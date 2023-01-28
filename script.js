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

// Dark theme style
function darkMode() {
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    imageMode('dark');
}

function lightMode() {
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun')
    imageMode('light');
}

function changeTheme(event)  {
    if(event.target.checked) {
     document.documentElement.setAttribute('data-theme', 'dark');
     localStorage.setItem('theme', 'dark')
     darkMode()
    } else {
     document.documentElement.setAttribute('data-theme', 'light');
     localStorage.setItem('theme', 'light');
     lightMode()
    }
 }

switchToggle.addEventListener('change', changeTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        switchToggle.checked = true;
        darkMode();
    }
}
