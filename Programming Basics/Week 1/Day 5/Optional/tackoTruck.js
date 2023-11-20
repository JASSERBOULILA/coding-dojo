function optimalTacoTruckLocation(customerCoordinates) {
    function calculateTotalDistance(truckLocation, customers) {
    let totalDistance = 0;
    for (const customer of customers) {
        totalDistance += Math.abs(truckLocation[0] - customer[0]) + Math.abs(truckLocation[1] - customer[1]);
    }
    return totalDistance;
    }

    // Initialize the optimal location as the first customer's location
    let optimalLocation = customerCoordinates[0];

    // Calculate the initial total distance
    let minDistance = calculateTotalDistance(optimalLocation, customerCoordinates);

    // Iterate through potential locations
    for (let x = -100; x <= 100; x++) {  // Adjust the range based on the city size
    for (let y = -100; y <= 100; y++) {
        const currentLocation = [x, y];
        const currentDistance = calculateTotalDistance(currentLocation, customerCoordinates);

        // Update the optimal location if the current one is better
        if (currentDistance < minDistance) {
        optimalLocation = currentLocation;
        minDistance = currentDistance;
        }
    }
    }

    return optimalLocation;
}

  // Example usage:
const customerCoordinates = [[2, -2], [6, 3], [-4, 5], [2, 5]];
const optimalLocation = optimalTacoTruckLocation(customerCoordinates);
console.log("Optimal Taco Truck Location:", optimalLocation);
