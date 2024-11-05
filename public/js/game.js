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
    // Create a new TextEncoder instance to encode the input string as UTF-8
    const encoder = new TextEncoder();
    // Encode the input data to Uint8Array (UTF-8 representation)
    const dataUint8 = encoder.encode(data);
    // Compute the SHA-256 hash of the encoded data
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataUint8);
    // Convert the hash buffer to a Uint8Array to work with individual bytes
    const hashArray = new Uint8Array(hashBuffer);
    // Convert each byte to a hexadecimal string and pad with leading zero if needed
    const hashHex = Array.from(hashArray)
        .map(byte => byte.toString(16).padStart(2, '0')) // Ensure each byte is represented by two hexadecimal digits
        .join(''); // Join all hexadecimal byte strings into a single hash string
    return hashHex;
}
