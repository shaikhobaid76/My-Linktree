// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add touch feedback for mobile
document.querySelectorAll('.link-item').forEach(link => {
    link.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    link.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// Ripple effect for click
document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size/2;
        const y = e.clientY - rect.top - size/2;
        
        // Determine ripple color based on link type
        let rippleColor;
        if (this.classList.contains('link-website')) rippleColor = 'rgba(255, 46, 46, 0.3)';
        else if (this.classList.contains('link-instagram')) rippleColor = 'rgba(228, 64, 95, 0.3)';
        else if (this.classList.contains('link-snapchat')) rippleColor = 'rgba(255, 252, 0, 0.3)';
        else if (this.classList.contains('link-gmail')) rippleColor = 'rgba(234, 67, 53, 0.3)';
        else if (this.classList.contains('link-whatsapp')) rippleColor = 'rgba(37, 211, 102, 0.3)';
        else if (this.classList.contains('link-linkedin')) rippleColor = 'rgba(0, 119, 181, 0.3)';
        else if (this.classList.contains('link-github')) rippleColor = 'rgba(255, 255, 255, 0.3)';
        else if (this.classList.contains('link-phone')) rippleColor = 'rgba(52, 183, 241, 0.3)';
        else if (this.classList.contains('link-map')) rippleColor = 'rgba(255, 0, 0, 0.3)';
        else rippleColor = 'rgba(255, 46, 46, 0.3)';
        
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
});

// Add CSS for ripple animation
if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Image loading effect
const profileImg = document.querySelector('.profile img');
profileImg.style.opacity = '0';
setTimeout(() => {
    profileImg.style.transition = 'opacity 0.5s ease';
    profileImg.style.opacity = '1';
}, 300);

// Fallback in case image doesn't load
profileImg.onerror = function() {
    console.log('Profile image failed to load, using fallback image');
    this.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
    this.alt = 'Obaid Shaikh';
};

// Smooth scroll and other interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
});