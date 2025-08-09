// Mobile menu functionality for Heavenly Soufflé website

document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle button, navigation, and create overlay element
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    // Create overlay element for when menu is open
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Toggle menu when hamburger button is clicked
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle icon if using Font Awesome
        const icon = menuToggle.querySelector('.hamburger-icon-fa');
        if (icon) {
            if (menuToggle.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
        
        // Prevent body scrolling when menu is open
        if (menuToggle.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset icon
        const icon = menuToggle.querySelector('.hamburger-icon-fa');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset icon
            const icon = menuToggle.querySelector('.hamburger-icon-fa');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Handle window resize - reset menu state if window width exceeds mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset icon
            const icon = menuToggle.querySelector('.hamburger-icon-fa');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});
