// import crypto module
const {
    createECDH,
} = require('crypto');

// Generate Alice's keys
const alice = createECDH('secp256k1');
const aliceKey = alice.generateKeys();

// Generate Bob's keys
const bob = createECDH('secp256k1');
const bobKey = bob.generateKeys();

// Exchange and generate the secret
const aliceSecret = alice.computeSecret(bobKey);
console.log("aliceSecret : ", aliceSecret);

const bobSecret = bob.computeSecret(aliceKey);
console.log("bobSecret : ", bobSecret);

// convert secret into hex
let aliceHexSecret = aliceSecret.toString("hex");
console.log("aliceHexSecret : ", aliceHexSecret);

let bobHexSecret = bobSecret.toString("hex");
console.log("bobHexSecret : ", bobHexSecret);
