/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const navbarLogo = document.getElementById('navbarLogo');
const mainNav = document.getElementById('mainNav');

// Fungsi untuk mendeteksi scroll
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        // Sembunyikan logo dan navbar
        navbarLogo.style.display = 'none';
        mainNav.style.display = 'none';
    } else {
        // Tampilkan logo dan navbar
        navbarLogo.style.display = 'block';
        mainNav.style.display = 'block';
    }
});

// Sembunyikan elemen saat halaman dimuat
window.addEventListener('load', () => {
    if (window.scrollY === 0) {
        navbarLogo.style.display = 'none';
        mainNav.style.display = 'none';
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwmtdy4VptYZGp-BRJRg4zffp1gVBCPIJFG9h-VXIQF1L4kLW2z_YxF7R1HRApAF3AP7Q/exec'

const form = document.forms['email-quote']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})