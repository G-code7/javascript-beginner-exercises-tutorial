function startCounting() {
    let counter = 100; // Initial value of the counter
    while (counter >= 0) { // Loop condition to include 0
        console.log(counter); // Print the current value of the counter
        counter--; // Decrement the counter
    }
    return counter; // Return the final value of the counter (which will be -1)
}

startCounting();
