let humburgerMenu = document.querySelector('.humburger-menu');
let mobileMenuZone = document.querySelector('.mobile-menu-zone');

humburgerMenu.addEventListener('click' , function(){
    mobileMenuZone.classList.toggle('show');
    humburgerMenu.classList.toggle('humburger-menu-clicked');
})