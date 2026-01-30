// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Auto flip profile after 1 second
function autoFlipProfile() {
    const flipProfileInner = document.querySelectorAll('.flip-profile-inner');
    
    setTimeout(() => {
        flipProfileInner.forEach(flipInner => {
            // Add auto-flip class
            flipInner.classList.add('auto-flip');
            
            // Remove class after animation completes
            setTimeout(() => {
                flipInner.classList.remove('auto-flip');
            }, 3000); // 3 seconds animation duration
        });
    }, 1000); // 1 second delay
}

// Add touch feedback for mobile
document.querySelectorAll('.link-item, .social-card').forEach(link => {
    link.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    link.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// Ripple effect for click
function addRippleEffect(element, rippleColor) {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size/2;
        const y = e.clientY - rect.top - size/2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: ${rippleColor};
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
            z-index: 1;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Apply ripple effect to all link items and social cards
document.querySelectorAll('.link-item, .social-card').forEach(item => {
    let rippleColor;
    if (item.classList.contains('link-website') || item.classList.contains('link-website')) 
        rippleColor = 'rgba(255, 46, 46, 0.3)';
    else if (item.classList.contains('link-instagram') || item.classList.contains('link-instagram')) 
        rippleColor = 'rgba(228, 64, 95, 0.3)';
    else if (item.classList.contains('link-snapchat') || item.classList.contains('link-snapchat')) 
        rippleColor = 'rgba(255, 252, 0, 0.3)';
    else if (item.classList.contains('link-gmail') || item.classList.contains('link-gmail')) 
        rippleColor = 'rgba(234, 67, 53, 0.3)';
    else if (item.classList.contains('link-whatsapp') || item.classList.contains('link-whatsapp')) 
        rippleColor = 'rgba(37, 211, 102, 0.3)';
    else if (item.classList.contains('link-linkedin') || item.classList.contains('link-linkedin')) 
        rippleColor = 'rgba(0, 119, 181, 0.3)';
    else if (item.classList.contains('link-github') || item.classList.contains('link-github')) 
        rippleColor = 'rgba(255, 255, 255, 0.3)';
    else if (item.classList.contains('link-phone') || item.classList.contains('link-phone')) 
        rippleColor = 'rgba(52, 183, 241, 0.3)';
    else if (item.classList.contains('link-map') || item.classList.contains('link-map')) 
        rippleColor = 'rgba(255, 0, 0, 0.3)';
    else 
        rippleColor = 'rgba(255, 46, 46, 0.3)';
    
    addRippleEffect(item, rippleColor);
});

// Add CSS for ripple animation and auto-flip
if (!document.querySelector('#dynamic-styles')) {
    const style = document.createElement('style');
    style.id = 'dynamic-styles';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes autoFlip {
            0% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
            100% { transform: rotateY(0deg); }
        }
        
        .auto-flip {
            animation: autoFlip 3s ease-in-out 1s 1 !important;
        }
    `;
    document.head.appendChild(style);
}

// Image loading effect
const profileImgs = document.querySelectorAll('.profile-img');
if (profileImgs.length > 0) {
    profileImgs.forEach(img => {
        img.style.opacity = '0';
        setTimeout(() => {
            img.style.transition = 'opacity 0.5s ease';
            img.style.opacity = '1';
        }, 300);

        // Fallback in case image doesn't load
        img.onerror = function() {
            console.log('Profile image failed to load, using fallback image');
            this.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            this.alt = 'Obaid Shaikh';
        };
    });
}

// Smooth animations for web view cards
document.addEventListener('DOMContentLoaded', function() {
    // Auto flip profile after 1 second
    autoFlipProfile();
    
    // Check if web view
    if (window.innerWidth >= 768) {
        const cards = document.querySelectorAll('.social-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${(index % 3) * 0.1}s`;
        });
    }
    
    console.log('Portfolio loaded successfully! Flip profile activated.');
});

// Detect viewport changes for F12 testing
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        location.reload();
    }, 250);
});

// Structured Data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Obaid Shaikh",
    "url": "https://obaidullah-shaikh-portfolio.vercel.app/",
    "image": "https://yourwebsite.com/assets/images/profile.jpg",
    "sameAs": [
        "https://www.linkedin.com/in/obaidullah-shaikh",
        "https://github.com/shaikhobaid76",
        "https://www.instagram.com/official_mr_obaid",
        "https://wa.me/919769443373"
    ]
};


// Add structured data to page
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);