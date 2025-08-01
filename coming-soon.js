// Load and display the feature name from session storage
document.addEventListener('DOMContentLoaded', function() {
    const featureName = sessionStorage.getItem('comingSoonFeature') || 'This Feature';
    const featureTitle = document.getElementById('featureTitle');
    
    if (featureTitle) {
        featureTitle.textContent = `${featureName} Coming Soon`;
    }
    
    // Update document title
    document.title = `CareerCarve - ${featureName} Coming Soon`;
    
    // Add dynamic description based on feature
    updateFeatureDescription(featureName);
});

// Go back to home page
function goBack() {
    window.location.href = 'index.html';
}

// Subscribe to notifications
function subscribeToNotifications() {
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate subscription process
    const notifyBtn = document.querySelector('.notify-btn');
    const originalText = notifyBtn.innerHTML;
    
    notifyBtn.innerHTML = '<span class="loading-spinner"></span>Subscribing...';
    notifyBtn.disabled = true;
    
    setTimeout(() => {
        notifyBtn.innerHTML = originalText;
        notifyBtn.disabled = false;
        showToast('Thanks! We\'ll notify you when it\'s ready.', 'success');
        
        // Store subscription in localStorage (for demo purposes)
        const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
        const featureName = sessionStorage.getItem('comingSoonFeature') || 'Unknown Feature';
        subscriptions.push({
            feature: featureName,
            email: email,
            date: new Date().toISOString()
        });
        localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    }, 1500);
}

// Show feedback dialog
function showFeedback() {
    const featureName = sessionStorage.getItem('comingSoonFeature') || 'this feature';
    alert(`Thanks for your interest in ${featureName}! Your feedback helps us prioritize development. We'll reach out to you soon for a user interview.`);
}

// Share page functionality
function sharePage() {
    const featureName = sessionStorage.getItem('comingSoonFeature') || 'CareerCarve';
    const shareText = `I'm excited about the upcoming ${featureName} feature in CareerCarve! 🚀`;
    
    if (navigator.share) {
        navigator.share({
            title: `${featureName} - CareerCarve`,
            text: shareText,
            url: window.location.href
        }).catch(() => {
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

// Show roadmap (placeholder)
function showRoadmap() {
    alert('🗺️ Product Roadmap\n\nQ1 2024: 1-on-1 Mentoring & Mock Interviews\nQ2 2024: AI Resume Builder & Skill Assessments\nQ3 2024: Career Roadmaps & Live Workshops\nQ4 2024: Advanced Analytics & Networking\n\nStay tuned for more updates!');
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('successToast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    
    if (type === 'error') {
        toast.style.background = '#ff4757';
        toastIcon.textContent = '❌';
    } else {
        toast.style.background = '#10ac84';
        toastIcon.textContent = '✅';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Link copied to clipboard!', 'success');
        }).catch(() => {
            showToast('Unable to share at this time', 'error');
        });
    } else {
        showToast('Sharing not supported on this device', 'error');
    }
}

function updateFeatureDescription(featureName) {
    const descriptionElement = document.querySelector('.feature-description');
    const descriptions = {
        '1-on-1 Mentoring': 'Connect with industry experts for personalized career guidance. Get insights from professionals who have walked your path and accelerate your growth.',
        'Mock Interviews': 'Practice makes perfect! Simulate real interview scenarios with AI-powered feedback and improve your confidence before the big day.',
        'Skill Assessments': 'Discover your strengths and areas for improvement with comprehensive skill evaluations tailored to your career goals.',
        'Career Roadmaps': 'Get a clear path to your dream job with personalized roadmaps that adapt to your progress and industry trends.',
        'AI Resume Builder': 'Create ATS-friendly resumes that stand out. Our AI analyzes job descriptions and optimizes your resume for maximum impact.',
        'Live Workshop': 'Join live sessions with industry experts and fellow learners. Interactive workshops covering the latest trends and skills.',
        'Notifications': 'Stay updated with personalized notifications about new mentors, workshop opportunities, and career insights.',
        'Schedule Session': 'Book your mentoring sessions and workshops with our smart scheduling system that adapts to your timezone and preferences.',
        'Progress': 'Track your learning journey with detailed analytics, skill progression, and achievement milestones.',
        'Messages': 'Connect with your mentors and peers through our secure messaging platform designed for professional growth.',
        'Profile': 'Build your professional profile and showcase your skills, achievements, and career aspirations to potential mentors.'
    };
    
    const description = descriptions[featureName] || 
        'We\'re working hard to bring you this amazing feature! Stay tuned for updates and be the first to know when it\'s ready.';
    
    if (descriptionElement) {
        descriptionElement.textContent = description;
    }
}

// Add loading spinner CSS
const style = document.createElement('style');
style.textContent = `
    .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);