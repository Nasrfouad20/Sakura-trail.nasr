// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // وظيفة تبديل القائمة (فتح/إغلاق)
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });

    // إغلاق القائمة عند الضغط على أي رابط (لتجنب بقائها مفتوحة على الموبايل)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });
});