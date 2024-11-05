import { seededRandom, seededShuffle } from "../public/js/seeded";

function testSeededRandom() {
    const random1 = seededRandom(12345);
    const random2 = seededRandom(12345);

    // Check that both random generators produce the same sequence for the same seed
    assertOrThrow(random1() === random2(), "First random number should match for same seed");
    assertOrThrow(random1() === random2(), "Second random number should match for same seed");
    assertOrThrow(random1() === random2(), "Third random number should match for same seed");

    // Check that different seeds produce different sequences
    const random3 = seededRandom(54321);
    assertOrThrow(random1() !== random3(), "Different seeds should produce different sequences");
    console.log("All seededRandom tests passed.");
}

function testSeededShuffle() {
    const array = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const seed = 12345;

    const shuffled1 = seededShuffle([...array], seed);
    const shuffled2 = seededShuffle([...array], seed);

    // Check that shuffle results are the same for the same seed
    assertOrThrow(
        JSON.stringify(shuffled1) === JSON.stringify(shuffled2),
        "Shuffled arrays should match for the same seed"
    );

    // Check that the result is different for a different seed
    const shuffled3 = seededShuffle([...array], 54321);
    assertOrThrow(
        JSON.stringify(shuffled1) !== JSON.stringify(shuffled3),
        "Shuffled arrays should differ for different seeds"
    );

    // Ensure that all elements are still in the shuffled array
    assertOrThrow(
        new Set(shuffled1).size === array.length,
        "All elements should be present in the shuffled array"
    );

    console.log("All seededShuffle tests passed.");
}

// Run the tests
testSeededRandom();
testSeededShuffle();

/**
 * A custom assert function that throws an error on failure, enabling test runners to detect failures.
 *
 * @param {boolean} condition - The condition to check.
 * @param {string} message - The error message to display if the condition is false.
 */
export function assertOrThrow(condition, message) {
    console.assert(condition, message);
    if (!condition) {
        throw new Error(message);
    }
}