import{setupProjectPageEvents} from './projects.js';


document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.getElementById("menu");
    hamMenu.addEventListener("click", extendMenu);
    
});

    
let menuIsOpen = false;
function extendMenu() {
    //create an array of buttons
    const buttons = ["HOME", "PROJECTS", "ABOUT", "NOTES"];

    //get my menu element
    const extendedMenu = document.getElementById("extendContent");
    extendedMenu.innerHTML = "";
    if (!menuIsOpen){
        // traverse through all buttons andd add them 
        buttons.forEach(title => {
            //create the button
            const btn = document.createElement("button");
            btn.textContent = title; // add the title
            btn.classList.add("menu-btn"); // add the button the classList
            btn.addEventListener("click", () => {
                loadContent(title);
                closeMenu();
            }); 
            extendedMenu.appendChild(btn); // append to my extendedMenu

            // replace menuClosed to menu open
            extendedMenu.classList.remove("menuClosed"); 
            extendedMenu.classList.add("menuOpen");
        });
        menuIsOpen = true;
    }else{
        closeMenu();
    }
};

function closeMenu(){
    const extendedMenu = document.getElementById("extendContent");
    extendedMenu.classList.remove("menuOpen");
    extendedMenu.classList.add("menuClosed");
    extendedMenu.innerHTML = "";
    menuIsOpen = false;

};

// out of scope learning, used genAI for fetch code
function loadContent(page) {
    const container = document.getElementById("contentBox");

    fetch(`pages/${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;

            if (page === 'PROJECTS') {
                setupProjectPageEvents();
            }
        })
        .catch(error => {
            container.innerHTML = `<p>Error loading page: ${error.message}</p>`;
        });
}

// Optional: load default page on first visit
window.addEventListener("DOMContentLoaded", () => {
    loadContent('home'); // default content on page load
});
    