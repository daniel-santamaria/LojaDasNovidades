const cover = document.getElementById('cover');
const sideMenuButton = document.getElementById('menuButton');

cover.addEventListener('click', function() {
    toggleSideMenu();
});

sideMenuButton.addEventListener('click', function() {
    toggleSideMenu();
});


function toggleSideMenu() {
    document.body.classList.toggle('sidenav-active');  
    document.body.classList.toggle('noscroll');
  }