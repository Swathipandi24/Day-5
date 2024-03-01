// Circle - Class
// Convert the UML diagram to Typescript class. - use number for double

//c:\Users\swathi\Pictures\Screenshots\Screenshot 2024-03-01 201049.png//


class Circle {
    // radius of the circle
    _radius; // removed "private" and replaced with underscore
  
    // color of the circle
    _color; // removed "private" and replaced with underscore
  
    // constructor with optional radius and color parameters
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    // method to get the radius of the circle
    getRadius() {
      return this._radius;
    }
  
    // method to set the radius of the circle
    setRadius(radius) {
      this._radius = radius;
    }
  
    // method to get the color of the circle
    getColor() {
      return this._color;
    }
  
    // method to set the color of the circle
    setColor(color) {
      this._color = color;
    }
  
    // method to calculate the area of the circle
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    // method to calculate the circumference of the circle
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  
    // method to get a string representation of the circle object
    toString() {
      return `Circle[radius=${this._radius}, color=${this._color}]`;
    }
  }
  