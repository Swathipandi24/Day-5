class UberPrice {
    /**
     * Estimates the Uber price based on distance and time.
     * 
     * Attributes:
     *  - baseFare (float): The base fare for Uber rides.
     *  - costPerMile (float): The cost per mile for Uber rides.
     *  - costPerMinute (float): The cost per minute for Uber rides.
     *  - minimumFare (float): The minimum fare for Uber rides.
     * 
     * Methods:
     *  - calculatePrice(distance, time): Calculates the estimated Uber price based on the provided distance and time.
     */
    constructor(baseFare = 3.0, costPerMile = 2.0, costPerMinute = 0.2, minimumFare = 10.0) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.minimumFare = minimumFare;
    }

    /**
     * Calculates the estimated Uber price based on the provided distance and time.
     * 
     * @param {number} distance - The distance of the Uber ride in miles.
     * @param {number} time - The time of the Uber ride in minutes.
     * @returns {number} - The estimated Uber price.
     */
    calculatePrice(distance, time) {
        const price = this.baseFare + (distance * this.costPerMile) + (time * this.costPerMinute);
        return Math.max(price, this.minimumFare);  // Ensure price is at least the minimum fare
    }
}

// Example usage
const uberPrice = new UberPrice();
const estimatedPrice = uberPrice.calculatePrice(5, 10);  // Assuming 5 miles and 10 minutes
console.log(`Estimated Uber price: $${estimatedPrice.toFixed(2)}`);


//output
/* Estimated Uber price: $15.00
 */

//output data based on python tutor
/* 
 Calculates the estimated Uber price based on the provided distance and time
baseFare	3
costPerMile	2
costPerMinute	0.200000
minimumFare	10 */
