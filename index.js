console.log ("Assignment 1 - Abhay Mahendera | 174811216 | abhay-mahendera@myseneca.ca\n------------------------------------------------------------------------\n" );


const EventEmitter = require('events');

class TrafficLight extends EventEmitter {
  constructor() {
    super();
    this.colors = ['Red', 'Yellow', 'Green'];
    this.currentIndex = 0;
  }

  start() {
    this.cycleColors();
  }

  cycleColors() {
    const durations = [5000, 2000, 5000]; // Durations in milliseconds for Red, Yellow, and Green
    let index = 0;

    const changeColor = () => {
      this.emit('colorChange', this.colors[index]);
      console.log(this.colors[index]);

      index = (index + 1) % this.colors.length;

      setTimeout(() => {
        changeColor(); // Call the function recursively after the specified duration
      }, durations[index]);
    };

    changeColor(); // Start the color-changing process
  }
}



const trafficLight = new TrafficLight();



trafficLight.on('colorChange', (color) => {
  console.log('The light just changed to', color);
});

trafficLight.start();
