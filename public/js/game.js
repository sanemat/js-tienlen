/**
 * Generates a SHA-256 hash from the given data.
 * 
 * This function encodes the input string into a Uint8Array, computes its SHA-256 hash
 * using the SubtleCrypto API, and returns the hash as a hexadecimal string.
 *
 * @async
 * @param {string} data - The input string to hash.
 * @returns {Promise<string>} A promise that resolves to the hexadecimal string representation of the hash.
 */
export async function generateHash(data) {
    // Create a new TextEncoder instance
    const encoder = new TextEncoder();
    // Encode the input data to Uint8Array
    const dataUint8 = encoder.encode(data);
    // Compute the SHA-256 hash
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataUint8);
    return Array.from(new Uint8Array(hashBuffer)) // Convert the hash buffer to an array of bytes
        .map(b => b.toString(16).padStart(2, '0')) // Convert each byte to a hexadecimal string and pad with zero if necessary
        .join(''); // Join all hexadecimal strings into one
}
