// Function to navigate to Coming Soon page
function goToComingSoon(featureName) {
    // Store the feature name for the coming soon page
    sessionStorage.setItem('comingSoonFeature', featureName);
    // Navigate to coming soon page
    window.location.href = 'coming-soon.html';
}

// Add some interactive feedback
document.addEventListener('DOMContentLoaded', function() {
    // Add click feedback to all interactive elements
    const interactiveElements = document.querySelectorAll('.action-card, .featured-card, .quick-btn, .notification-bell');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Add a slight vibration effect on mobile devices if supported
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Notification bell click handler
    document.querySelector('.notification-bell').addEventListener('click', function() {
        goToComingSoon('Notifications');
    });

    // Add greeting time-based logic
    const greeting = document.querySelector('.user-greeting h2');
    const hour = new Date().getHours();
    let timeGreeting;
    
    if (hour < 12) {
        timeGreeting = 'Good Morning';
    } else if (hour < 17) {
        timeGreeting = 'Good Afternoon';
    } else {
        timeGreeting = 'Good Evening';
    }
    
    greeting.innerHTML = `👋 ${timeGreeting}, Alex!`;

    // Add loading states for better UX
    const cards = document.querySelectorAll('.action-card, .featured-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                // Remove loading state after a short delay to simulate navigation
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 500);
            }
        });
    });
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    .loading {
        opacity: 0.7;
        pointer-events: none;
        position: relative;
    }
    
    .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid #f3f3f3;
        border-top: 2px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);