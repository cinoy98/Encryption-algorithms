// import crypto module
const crypto = require("crypto");

// define the algorithm to use
const algorithm = "aes-128-cbc";

// generate 16 bytes of random data for initializationVector
const initializationVector = crypto.randomBytes(16);

// Define the message to encrypt
const message = "This is a secret message";

console.log("Original message: ", message);

// generate 32 bytes of random data as security key
const Securitykey = crypto.randomBytes(16);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initializationVector);

// encrypt the message

// input encoding  ==> utf-8
// output encoding ==> hex
let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: ", encryptedData);

// the decipher function
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initializationVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: ", decryptedData);