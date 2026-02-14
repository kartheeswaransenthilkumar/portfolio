// ===================================
// Advanced Animations & Effects
// ===================================

// Particle styles
const style = document.createElement('style');
style.textContent = `
.particle {
    position: absolute;
    background: var(--primary-color);
    border-radius: 50%;
    opacity: 0.3;
    pointer-events: none;
    animation: float linear infinite;
}

@keyframes float {
    0% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0.3;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: translateY(-100vh) translateX(50px) scale(0.5);
        opacity: 0;
    }
}

/* Custom Cursor (Optional) */
.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease, opacity 0.3s ease;
    opacity: 0;
}

.custom-cursor.active {
    opacity: 1;
}

.custom-cursor.hover {
    transform: scale(1.5);
    background: rgba(99, 102, 241, 0.1);
}

/* Glitch Effect for Text */
.glitch {
    position: relative;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    animation: glitch-1 0.3s infinite;
    color: var(--primary-color);
    z-index: -1;
}

.glitch::after {
    animation: glitch-2 0.3s infinite;
    color: var(--secondary-color);
    z-index: -2;
}

@keyframes glitch-1 {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
}

@keyframes glitch-2 {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(2px, -2px);
    }
    40% {
        transform: translate(2px, 2px);
    }
    60% {
        transform: translate(-2px, -2px);
    }
    80% {
        transform: translate(-2px, 2px);
    }
    100% {
        transform: translate(0);
    }
}

/* Tilt Effect */
.tilt {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

/* Parallax Effect */
.parallax {
    transition: transform 0.3s ease;
}

/* Ripple Effect */
.ripple {
    position: relative;
    overflow: hidden;
}

.ripple::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.ripple:active::before {
    width: 300px;
    height: 300px;
}

/* Gradient Animation */
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.gradient-animate {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
}

/* Pulse Animation */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.8;
        transform: scale(1.05);
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}

/* Shake Animation */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.shake {
    animation: shake 0.5s ease;
}

/* Glow Effect */
.glow {
    box-shadow: 0 0 20px var(--primary-color);
    transition: box-shadow 0.3s ease;
}

.glow:hover {
    box-shadow: 0 0 30px var(--primary-color), 0 0 40px var(--primary-color);
}
`;
document.head.appendChild(style);

// ===================================
// Mouse Trail Effect
// ===================================
function initMouseTrail() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 20;
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.life = 100;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 2;
            if (this.size > 0.2) this.size -= 0.1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.life / 100})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        for (let i = 0; i < 2; i++) {
            particles.push(new Particle(mouseX, mouseY));
        }
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===================================
// Tilt Effect on Cards
// ===================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .cert-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ===================================
// Parallax Effect
// ===================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax') || 0.5;
            const yPos = -(window.scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===================================
// Text Scramble Effect
// ===================================
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += from;
            }
        }
        
        this.el.innerText = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// ===================================
// Intersection Observer for Animations
// ===================================
function initAdvancedAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.getAttribute('data-animate');
                    entry.target.classList.add(animation);
                }
            });
        },
        { threshold: 0.1 }
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===================================
// Magnetic Buttons
// ===================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ===================================
// Initialize Advanced Animations
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Enable mouse trail effect (optional - can be resource intensive)
    // initMouseTrail();
    
    // Enable tilt effect on cards
    initTiltEffect();
    
    // Enable parallax effect
    initParallax();
    
    // Enable advanced animations
    initAdvancedAnimations();
    
    // Enable magnetic buttons
    initMagneticButtons();
});

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Use throttled scroll for better performance
const optimizedScroll = throttle(() => {
    // Scroll-based animations
}, 50);

window.addEventListener('scroll', optimizedScroll);

// ===================================
// Add Ripple Effect to Buttons
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const rippleButtons = document.querySelectorAll('.btn, .filter-btn, .project-link');
    
    rippleButtons.forEach(button => {
        button.classList.add('ripple');
    });
});
