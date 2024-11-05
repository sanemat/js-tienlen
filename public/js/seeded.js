/**
 * Creates a seeded random number generator using a Linear Congruential Generator (LCG) algorithm.
 * This allows generating a reproducible sequence of random numbers based on the given seed.
 * The generated sequence will be the same for the same seed.
 *
 * @param {number} seed - An integer seed for the random number generator.
 * @returns {function(): number} A function that returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
 */
export function seededRandom(seed) {
    const m = 0x80000000; // 2**31, the modulus for the LCG algorithm
    const a = 1103515245; // multiplier used in the LCG
    const c = 12345; // increment used in the LCG

    let state = seed ? seed : Math.floor(Math.random() * (m - 1));
    return function() {
        state = (a * state + c) % m;
        return state / (m - 1);
    };
}

/**
 * Shuffles an array in place using the Fisher-Yates shuffle algorithm with a seeded random number generator.
 * This ensures that the shuffle order is the same for the same seed, making it reproducible.
 *
 * @template T
 * @param {T[]} array - The array to be shuffled.
 * @param {number} seed - An integer seed for the random number generator.
 * @returns {T[]} The shuffled array.
 */
export function seededShuffle(array, seed) {
    const random = seededRandom(seed); // Initialize seeded random number generator
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1)); // Generate a random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
