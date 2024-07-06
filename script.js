// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`

// file-operations.js
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});
// file-operations.js
const fs = require('fs');

// Write to file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File has been saved!');

  // Read from file
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });
});
// password-generator.js
const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 10,
  numbers: true
});

console.log('Generated Password:', password);
// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-email-password' // replace with your email password or app password
  }
});

// Set up email data
const mailOptions = {
  from: 'your-email@gmail.com', // replace with your email
  to: 'your-email@gmail.com', // replace with your email
  subject: 'Hello from Node.js',
  text: 'Hello Node!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
