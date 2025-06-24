// Add click effect on the heart
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart-shape');
    const colors = ['#ff6b6b', '#66b3ff', '#ffcc5c', '#96ceb4', '#ff9d76'];
    let currentColor = 0;

    // Change color on click
    heart.addEventListener('click', () => {
        currentColor = (currentColor + 1) % colors.length;
        heart.style.backgroundColor = colors[currentColor];
        
        // Also update the pseudo-elements
        const style = document.createElement('style');
        style.id = 'heart-colors';
        style.textContent = `
            .heart-shape:before,
            .heart-shape:after {
                background-color: ${colors[currentColor]};
            }
        `;
        
        // Remove old style if it exists
        const oldStyle = document.getElementById('heart-colors');
        if (oldStyle) {
            document.head.removeChild(oldStyle);
        }
        
        document.head.appendChild(style);
        
        // Add a small bounce effect
        heart.style.animation = 'none';
        void heart.offsetWidth; // Trigger reflow
        heart.style.animation = 'bounce 0.5s ease';
    });

    // Add hover effect for the postscript
    const postscript = document.querySelector('.postscript');
    postscript.addEventListener('mouseover', () => {
        postscript.style.transform = 'scale(1.05)';
        postscript.style.transition = 'transform 0.3s ease';
    });

    postscript.addEventListener('mouseout', () => {
        postscript.style.transform = 'scale(1)';
    });

    // Add animation for the heart content
    const heartContent = document.querySelector('.heart-content p');
    if (heartContent) {
        heartContent.style.animation = 'fadeIn 1s ease-out';
    }
});

// Add the bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: rotate(45deg) scale(1); }
        50% { transform: rotate(45deg) scale(0.95); }
    }
`;
document.head.appendChild(style);
