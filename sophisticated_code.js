/*
 * Filename: sophisticated_code.js
 * 
 * Content: This complex JavaScript code demonstrates a solar system simulation
 * with complex mathematical calculations and realistic animations.
 */

// Solar System object
const SolarSystem = {
  // Constants
  SPACE_WIDTH: 800,
  SPACE_HEIGHT: 600,
  GRAVITY_CONST: 0.005,
  
  // Planets data
  sun: { name: 'Sun', radius: 30, position: { x: 0, y: 0 }, color: '#fddb6d' },
  mercury: { name: 'Mercury', radius: 5, distance: 100, speed: 0.01, color: '#d9e1ec' },
  venus: { name: 'Venus', radius: 7, distance: 150, speed: 0.008, color: '#ffcb97' },
  earth: { name: 'Earth', radius: 8, distance: 200, speed: 0.006, color: '#81d3ef' },
  mars: { name: 'Mars', radius: 7, distance: 250, speed: 0.005, color: '#fc7171' },
  jupiter: { name: 'Jupiter', radius: 15, distance: 350, speed: 0.003, color: '#febe18' },
  saturn: { name: 'Saturn', radius: 12, distance: 450, speed: 0.002, color: '#efab16' },
  uranus: { name: 'Uranus', radius: 10, distance: 550, speed: 0.0015, color: '#d6f5ff' },
  neptune: { name: 'Neptune', radius: 9, distance: 650, speed: 0.001, color: '#66a5ad' },
  
  // Initialize the solar system
  init: function() {
    const canvas = document.createElement('canvas');
    canvas.width = this.SPACE_WIDTH;
    canvas.height = this.SPACE_HEIGHT;
    document.body.appendChild(canvas);
    this.context = canvas.getContext('2d');
    this.planets = [this.sun, this.mercury, this.venus, this.earth, this.mars, this.jupiter, this.saturn, this.uranus, this.neptune];
    this.animate();
  },
  
  // Animate the solar system
  animate: function() {
    requestAnimationFrame(this.animate.bind(this));
    this.context.clearRect(0, 0, this.SPACE_WIDTH, this.SPACE_HEIGHT);
    
    for (const planet of this.planets) {
      this.updatePosition(planet);
      this.drawPlanet(planet);
    }
  },
  
  // Update planet's position based on gravity
  updatePosition: function(planet) {
    for (const otherPlanet of this.planets) {
      if (planet !== otherPlanet) {
        const dx = otherPlanet.position.x - planet.position.x;
        const dy = otherPlanet.position.y - planet.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const gravityForce = this.GRAVITY_CONST * (planet.radius * otherPlanet.radius) / (distance * distance);
        const gravityFactorX = gravityForce * (dx / distance);
        const gravityFactorY = gravityForce * (dy / distance);
        
        planet.position.x += gravityFactorX;
        planet.position.y += gravityFactorY;
      }
    }
  },
  
  // Draw the planet
  drawPlanet: function(planet) {
    this.context.beginPath();
    this.context.arc(planet.position.x, planet.position.y, planet.radius, 0, 2 * Math.PI);
    this.context.fillStyle = planet.color;
    this.context.fill();
    this.context.closePath();
    
    this.context.font = "12px Arial";
    this.context.fillStyle = planet.color;
    this.context.fillText(planet.name, planet.position.x - planet.radius, planet.position.y - planet.radius - 10);
  }
};

// Initialize the solar system
SolarSystem.init();