import { generateHash } from "../public/js/game";

async function testGenerateHash() {
    // Test 1: Same data should produce the same hash
    const data = "test data";
    const hash1 = await generateHash(data);
    const hash2 = await generateHash(data);
    assertOrThrow(hash1 === hash2, "Hash values should match for the same input data");

    // Test 2: Different data should produce different hashes
    const differentData = "different data";
    const differentHash = await generateHash(differentData);
    assertOrThrow(hash1 !== differentHash, "Hash values should differ for different input data");

    // Test 3: Check for known hash value (SHA-256 hash of "hello")
    const knownData = "hello";
    const knownHash = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
    const generatedHash = await generateHash(knownData);
    assertOrThrow(generatedHash === knownHash, "Generated hash should match the known SHA-256 hash for 'hello'");

    console.log("All generateHash tests passed.");
}

// Run the tests
await testGenerateHash();

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