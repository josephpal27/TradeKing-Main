
// Functionality for Home Page Banner Animated Text
document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "MCX/MCX Mini",
        "Forex",
        "COMEX",
        "Options Trading",
        "Cryptocurrency",
        "NSE",
    ];
    const el = document.querySelector('.banner-animated-text p');
    let textIndex = 0;
    let charIndex = 0;
    let typing = true;

    // For smoothness, use requestAnimationFrame and variable speed
    let lastTime = 0;
    let delay = 0;
    let typingSpeed = 38;   // ms per character
    let erasingSpeed = 32;  // ms per character
    let pauseAfterType = 1500;
    let pauseAfterErase = 250;

    function typeWriter(now) {
        if (!lastTime) lastTime = now;
        if (now - lastTime < delay) {
            requestAnimationFrame(typeWriter);
            return;
        }
        lastTime = now;

        if (typing) {
            if (charIndex < texts[textIndex].length) {
                el.textContent = texts[textIndex].substring(0, charIndex + 1);
                charIndex++;
                delay = typingSpeed;
            } else {
                typing = false;
                delay = pauseAfterType;
            }
        } else {
            if (charIndex > 0) {
                el.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                delay = erasingSpeed;
            } else {
                typing = true;
                textIndex = (textIndex + 1) % texts.length;
                delay = pauseAfterErase;
            }
        }
        requestAnimationFrame(typeWriter);
    }

    if (el) requestAnimationFrame(typeWriter);
});

// ---------------------------------------------------------------------------------------

// Functionality For Home Page Features Section Canvas Animation
particlesJS("features-canvas", {
  particles: {
    number: { value: 70 },
    size: { value: 1.5 },
    color: { value: "#fff" },
    move: { speed: 4.5 },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#fff",
      opacity: 0.5,
      width: 1,
    },
  },
});

// ---------------------------------------------------------------------------------------

// Functionality For Home Page All Trades Cards Section Canvas Animation
const tradeCanvasIds = ["all-trade-canvas-1", "all-trade-canvas-2", "all-trade-canvas-3"];
const tradeParticlesConfig = {
  particles: {
    number: { value: 80 },
    size: { value: 1.5 },
    color: { value: "#fff" },
    move: { speed: 4.5 },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#fff",
      opacity: 0.5,
      width: 1,
    },
  },
};

tradeCanvasIds.forEach(id => particlesJS(id, tradeParticlesConfig));

// ---------------------------------------------------------------------------------------