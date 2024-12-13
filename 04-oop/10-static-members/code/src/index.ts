class Ride {
  // Static member
  private static _activeRides: number = 0;

  start() {
    // Increments the current value of the class (NOT object) property
    Ride._activeRides++;
  }

  stop() {
    // Decrements the current value of the class (NOT object) property
    Ride._activeRides--;
  }

  // Getter method
  static get activeRides() {
    return Ride._activeRides;
  }
}

// Instantiate objects from class
let rider1 = new Ride();
let rider2 = new Ride();

// Access object method "start"
rider1.start();
rider2.start();

// Use the static getter method to retrieve the targeted private static class property
console.log(Ride.activeRides);
