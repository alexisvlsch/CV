document.addEventListener('DOMContentLoaded', () => {
  // Configuration
  const DEFAULT_BEHIND_GRADIENT = "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";
  const DEFAULT_INNER_GRADIENT = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";
  
  // Helpers
  const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
  const round = (value, precision = 3) => parseFloat(value.toFixed(precision));
  const adjust = (value, fromMin, fromMax, toMin, toMax) => 
    round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
  const easeInOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

  // Card elements
  const cardWrapper = document.querySelector('.pc-card-wrapper');
  const card = document.querySelector('.pc-card');
  
  if (!cardWrapper || !card) return;
  
  let rafId = null;
  
  // Update card transform
  const updateCardTransform = (offsetX, offsetY) => {
    const width = card.clientWidth;
    const height = card.clientHeight;

    const percentX = clamp((100 / width) * offsetX);
    const percentY = clamp((100 / height) * offsetY);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    cardWrapper.style.setProperty('--pointer-x', `${percentX}%`);
    cardWrapper.style.setProperty('--pointer-y', `${percentY}%`);
    cardWrapper.style.setProperty('--background-x', `${adjust(percentX, 0, 100, 35, 65)}%`);
    cardWrapper.style.setProperty('--background-y', `${adjust(percentY, 0, 100, 35, 65)}%`);
    cardWrapper.style.setProperty('--pointer-from-center', `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`);
    cardWrapper.style.setProperty('--pointer-from-top', `${percentY / 100}`);
    cardWrapper.style.setProperty('--pointer-from-left', `${percentX / 100}`);
    cardWrapper.style.setProperty('--rotate-x', `${round(-(centerX / 5))}deg`);
    cardWrapper.style.setProperty('--rotate-y', `${round(centerY / 4)}deg`);
  };

  // Animation function
  const createSmoothAnimation = (duration, startX, startY) => {
    const startTime = performance.now();
    const targetX = cardWrapper.clientWidth / 2;
    const targetY = cardWrapper.clientHeight / 2;

    const animationLoop = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = clamp(elapsed / duration);
      const easedProgress = easeInOutCubic(progress);

      const currentX = adjust(easedProgress, 0, 1, startX, targetX);
      const currentY = adjust(easedProgress, 0, 1, startY, targetY);

      updateCardTransform(currentX, currentY);

      if (progress < 1) {
        rafId = requestAnimationFrame(animationLoop);
      }
    };

    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    
    rafId = requestAnimationFrame(animationLoop);
  };

  // Event handlers
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    updateCardTransform(event.clientX - rect.left, event.clientY - rect.top);
  });

  card.addEventListener('pointerenter', () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    cardWrapper.classList.add('active');
    card.classList.add('active');
  });

  card.addEventListener('pointerleave', (event) => {
    createSmoothAnimation(600, event.offsetX, event.offsetY);
    cardWrapper.classList.remove('active');
    card.classList.remove('active');
  });

  // Initial animation
  const initialX = cardWrapper.clientWidth - 70;
  const initialY = 60;
  updateCardTransform(initialX, initialY);
  createSmoothAnimation(1500, initialX, initialY);
});