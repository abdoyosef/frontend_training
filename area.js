function calculateArea(shape, a, b) {
  if (shape === "rectangle") return a * b;
  if (shape === "circle") return Math.PI * a * a;
  return null; // or throw an error if shape is unknown
}

// Usage:
console.log(calculateArea("rectangle", 5, 10)); // 50
console.log(calculateArea("circle", 3));        // 28.27...
