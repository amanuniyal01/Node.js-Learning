Episode-02 – Understanding IIFE, Module Privacy & How require() Works in Node.js
📌 Introduction

This episode focuses on three foundational concepts in Node.js:

What an IIFE (Immediately Invoked Function Expression) is

How Node.js naturally provides module-level privacy

The internal workflow of Node.js's require() function

These ideas form the backbone of how Node.js handles modular code, scope isolation, and dependency loading.

🔹 1. Immediately Invoked Function Expression (IIFE)

An IIFE is a function in JavaScript that runs automatically the moment it is defined. It’s commonly used to create a private scope so variables don’t leak into the global environment.

✔ Basic Syntax
(function () {
    // Private code block
})();

✔ Passing Arguments to an IIFE

You may pass values directly into it:

(function (value) {
    console.log("Value received:", value);
})(42);


Here, the variable value exists only inside the IIFE—nowhere else.

🔹 How Node.js Relates to IIFEs

Although Node.js modules already provide isolated scope, IIFEs are still helpful when:

You want extra encapsulation inside a file

You want to organize a group of functions privately

You want immediate execution of setup or initialization logic

👍 Example (New + Custom)
const utilities = (() => {
    let secretCode = "NODE_2025";

    function logSecret() {
        console.log("Accessing private logic...");
    }

    return {
        reveal: () => {
            logSecret();
            console.log("Secret code is:", secretCode);
        }
    };
})();

module.exports = utilities;


Here:

secretCode and logSecret() remain private

Only reveal() is accessible when imported

🔹 2. Module Privacy in Node.js

Node.js automatically wraps every file inside its own function (using CommonJS), which gives each module its own private scope.

This means:

Anything you do not export is private

Other files cannot access internal variables/functions

It prevents name collisions between files

✔ Example (New + Custom)
// account.js

const balance = 5000; // private variable

function calculateInterest() {  // private function
    return balance * 0.05;
}

module.exports = {
    getBalance: () => balance,
    getInterest: () => calculateInterest()
};


If another file imports this:

const account = require('./account');
console.log(account.getInterest());  // Allowed
console.log(account.balance);        // ❌ Not allowed


The internal variables remain hidden—only the exported API is available.

🔹 3. How require() Works Internally in Node.js

The require() function doesn't just load a file. It performs multiple steps behind the scenes.

Node.js follows five internal phases:

1️⃣ Module Resolution

Node figures out what you are trying to load:

Is it a core module? (fs, events…)

Is it inside node_modules?

Is it a relative path (./file)?

2️⃣ Module Loading

The file’s contents are read from disk.

.js → treated as JavaScript

.json → parsed as JSON

.node → treated as compiled addon

3️⃣ Module Wrapping

Before executing, Node wraps your file inside a function:

(function (exports, require, module, __filename, __dirname) {
    // Your actual module code
});


This wrapper ensures your module has its own scope, which is why variables inside one module aren’t visible to others.

4️⃣ Compilation & Execution

JavaScript code is compiled by the V8 engine

The wrapped function is executed

module.exports is populated with exported values

5️⃣ Caching

After loading, Node caches the module.

Requiring the same file again:

require('./math');


does not re-execute the file—it returns the cached result for better performance.

✔ Example:
file: mathTools.js
console.log("mathTools.js executed");

let count = 0;

function increment() {
    count++;
    return count;
}

module.exports = {
    inc: increment
};

file: index.js
const tools = require('./mathTools');

console.log(tools.inc()); 
console.log(tools.inc());

Output:
mathTools.js executed
1
2


If index.js required this file multiple times, "mathTools.js executed" would appear only once—because of module caching.

🎉 Conclusion

By understanding:

How IIFEs create private execution contexts

How Node.js modules inherently provide encapsulation

How the CommonJS require() pipeline works

—you gain a deeper look into how Node keeps your code organized, modular, and efficient.

⭐ If you enjoy this series…

Please consider starring the repository and sharing it with friends who are learning Node.js!

