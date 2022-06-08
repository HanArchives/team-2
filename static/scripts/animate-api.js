const pomRotate = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#2596be' },
  { color: '#4169e1', offset: 0.3 },
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#f56f3e' },
];

const pomTime = {
  duration: 3000,
  iterations: Infinity,
};

document.querySelector('.pom').animate(pomRotate, pomTime);
