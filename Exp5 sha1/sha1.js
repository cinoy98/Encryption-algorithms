//Loading the crypto module in node.js
let crypto = require('crypto');
//define message to hash
const message = "this is a sample";
//log the plain text in console
console.log("Plain text : ", message);
//define the hashing algorithm
const algorithm = "sha1";
//creating hash object 
let hashObject = crypto.createHash(algorithm);
//passing the data to be hashed
let data = hashObject.update(message, 'utf-8');
//Creating the hash in the required format
const generatedHash = data.digest('hex');
//log the output on the console
console.log("Hashed message : " + generatedHash);