const cover = document.getElementById('cover');
const sideMenuButton = document.getElementById('menuButton');
const sidenavCategories = document.querySelectorAll('input[type="checkbox"]');

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

window.addEventListener('load', function() {
    for(let i = 0; i < sidenavCategories.length; i++) {
        sidenavCategories[i].addEventListener('change', function () {
            for(let j = 0; j < sidenavCategories.length; j++) {
                if(sidenavCategories[i] != sidenavCategories[j]) {
                sidenavCategories[j].checked = false;
                }
            }
        })
    }
})