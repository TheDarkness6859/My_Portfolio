const ButtonSidebar = document.getElementById("Button");
const Sidebar = document.getElementById("Sidebar");
const Overlay = document.getElementById("Overlay");

function ToggleMenu(){

    Sidebar.classList.toggle("Sidebar-open");

    Overlay.classList.toggle("Overlay-active");

}

ButtonSidebar.addEventListener('click', ToggleMenu);
Overlay.addEventListener('click', ToggleMenu);