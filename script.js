// 70s Theme JavaScript - Far Out Edition

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all groovy features
    initSmoothScrolling();
    initDiscoEffects();
    initActivityInteractions();
    initParallaxEffects();
    initTypingEffect();
    initParticleSystem();
    initSoundEffects();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Disco ball and lighting effects
function initDiscoEffects() {
    const discoBall = document.querySelector('.disco-ball');
    const body = document.body;
    
    // Add disco lighting effect on hover
    discoBall.addEventListener('mouseenter', function() {
        body.style.filter = 'hue-rotate(180deg) saturate(1.5)';
        createDiscoLights();
    });
    
    discoBall.addEventListener('mouseleave', function() {
        body.style.filter = 'none';
        removeDiscoLights();
    });
    
    // Random disco ball sparkles
    setInterval(createSparkle, 2000);
}

function createDiscoLights() {
    const colors = ['#FF69B4', '#00BFFF', '#FFD700', '#8B5CF6', '#00FF7F'];
    
    for (let i = 0; i < 5; i++) {
        const light = document.createElement('div');
        light.className = 'disco-light';
        light.style.cssText = `
            position: fixed;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, ${colors[i]} 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            animation: disco-light-pulse 2s ease-in-out infinite;
        `;
        
        document.body.appendChild(light);
        
        // Remove after animation
        setTimeout(() => {
            if (light.parentNode) {
                light.parentNode.removeChild(light);
            }
        }, 2000);
    }
}

function removeDiscoLights() {
    const lights = document.querySelectorAll('.disco-light');
    lights.forEach(light => {
        if (light.parentNode) {
            light.parentNode.removeChild(light);
        }
    });
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: fixed;
        font-size: 20px;
        pointer-events: none;
        z-index: 1000;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: sparkle-fall 3s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 3000);
}

// Activity card interactions
function initActivityInteractions() {
    const activities = document.querySelectorAll('.activity');
    
    activities.forEach(activity => {
        activity.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
            this.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.4)';
            
            // Add groovy sound effect (visual feedback)
            createGroovyRipple(this);
        });
        
        activity.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        activity.addEventListener('click', function() {
            // Add click animation
            this.style.animation = 'activity-click 0.3s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
}

function createGroovyRipple(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(139, 92, 246, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Parallax scrolling effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.stars, .twinkling');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax for hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Particle system for extra groovy vibes
function initParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Create floating particles
    setInterval(createParticle, 3000);
}

function createParticle() {
    const particle = document.createElement('div');
    const symbols = ['☮️', '✌️', '🌈', '🎸', '🎵', '💫', '⭐', '🌟'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    particle.innerHTML = randomSymbol;
    particle.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 20 + 10}px;
        left: ${Math.random() * window.innerWidth}px;
        top: 100vh;
        pointer-events: none;
        z-index: 1;
        animation: float-up ${Math.random() * 10 + 10}s linear forwards;
        opacity: ${Math.random() * 0.5 + 0.3};
    `;
    
    document.querySelector('.particle-container').appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 20000);
}

// Sound effects (visual feedback since we can't play actual sounds)
function initSoundEffects() {
    // Add visual feedback for interactions
    document.addEventListener('click', function(e) {
        if (e.target.matches('.nav-link, .activity, .activity-card, .speaker-card')) {
            createSoundWave(e.clientX, e.clientY);
        }
    });
}

function createSoundWave(x, y) {
    const wave = document.createElement('div');
    wave.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(139, 92, 246, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: sound-wave 0.8s ease-out forwards;
        transform: translate(-50%, -50%);
    `;
    
    document.body.appendChild(wave);
    
    setTimeout(() => {
        if (wave.parentNode) {
            wave.parentNode.removeChild(wave);
        }
    }, 800);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes disco-light-pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.2); }
    }
    
    @keyframes sparkle-fall {
        0% { 
            opacity: 1; 
            transform: translateY(0) rotate(0deg); 
        }
        100% { 
            opacity: 0; 
            transform: translateY(100vh) rotate(360deg); 
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes activity-click {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }
    
    @keyframes float-up {
        0% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0.7; 
        }
        100% { 
            transform: translateY(-100vh) rotate(360deg); 
            opacity: 0; 
        }
    }
    
    @keyframes sound-wave {
        0% { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
        }
        100% { 
            transform: translate(-50%, -50%) scale(10); 
            opacity: 0; 
        }
    }
    
    .disco-light {
        animation: disco-light-pulse 2s ease-in-out infinite;
    }
`;

document.head.appendChild(style);

// Easter egg: Konami code for extra groovy mode
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateGroovyMode();
        konamiCode = [];
    }
});

function activateGroovyMode() {
    // Add extra groovy effects
    document.body.style.animation = 'groovy-shake 0.5s ease-in-out infinite';
    
    // Create rainbow background
    const rainbowOverlay = document.createElement('div');
    rainbowOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, 
            #FF0000, #FF7F00, #FFFF00, #00FF00, 
            #0000FF, #4B0082, #9400D3, #FF0000);
        background-size: 400% 400%;
        animation: rainbow-flow 2s ease-in-out infinite;
        pointer-events: none;
        z-index: 999;
        opacity: 0.1;
    `;
    
    document.body.appendChild(rainbowOverlay);
    
    // Add rainbow animation
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes groovy-shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
        
        @keyframes rainbow-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
    `;
    
    document.head.appendChild(rainbowStyle);
    
    // Show groovy message
    const message = document.createElement('div');
    message.textContent = '🎸 GROOVY MODE ACTIVATED! 🎸';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Fredoka One', cursive;
        font-size: 2rem;
        color: #FFD700;
        text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
        z-index: 1001;
        animation: groovy-message 3s ease-out forwards;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }
        if (rainbowOverlay.parentNode) {
            rainbowOverlay.parentNode.removeChild(rainbowOverlay);
        }
        document.body.style.animation = '';
    }, 5000);
    
    // Add groovy message animation
    const messageStyle = document.createElement('style');
    messageStyle.textContent = `
        @keyframes groovy-message {
            0% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.5); 
            }
            20% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1.2); 
            }
            80% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }
            100% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.8); 
            }
        }
    `;
    
    document.head.appendChild(messageStyle);
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Parallax effects are already throttled in initParallaxEffects
}, 16)); // ~60fps

console.log('🎸 Groovy 70s website loaded! Try the Konami code for a surprise! ✨');
