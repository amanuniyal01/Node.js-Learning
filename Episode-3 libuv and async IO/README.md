Episode 03 – Asynchronous JavaScript, Node.js, libuv & Event Loop

This episode covers how JavaScript (which is naturally synchronous and single-threaded) becomes asynchronous when running inside Node.js.
The magic behind this behavior is libuv, an underlying C library that gives Node.js the power to perform non-blocking I/O operations.

1. JavaScript: Synchronous & Single-Threaded

JavaScript by itself runs synchronously.

It uses:

Call Stack

Memory Heap

Garbage Collector

JS runs one line at a time. It waits for the current operation to finish before moving to the next one.

Example (Synchronous Execution)
var a = 10;
var b = 20;

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log(c);


Here, each line must finish before the next starts.

2. Asynchronous JavaScript in Node.js

JavaScript becomes asynchronous inside Node.js thanks to libuv.

Examples (Asynchronous Operations)
http.get("https://api.fbi.com", (res) => {
  console.log("Web Data:", res);
});

fs.readFile("gossip.txt", "utf8", (data) => {
  console.log("File Data:", data);
});

setTimeout(() => {
  console.log("Timer completed");
}, 1000);


These tasks (HTTP calls, file reads, timers) do not block the main thread.

3. How Synchronous Code Executes

Inside the V8 engine:

 --------------------
|     V8 Engine      |
|  Memory Heap       |
|  Call Stack        |
|  Garbage Collector |
 --------------------


Single thread.

Executes code line-by-line.

No built-in async abilities.

4. How Asynchronous Code Executes in Node.js

When JS code triggers async operations like:

File read/write

Database queries

Network requests

Timers

Node.js offloads these tasks to libuv.

5. libuv – The Hero of Node.js
What is libuv?

A C library used internally by Node.js.

Provides:

Asynchronous I/O

Thread pools

Event loop

Makes non-blocking operations possible.

Diagram (Conceptual)
     Node.js
 -----------------
|   V8 Engine     |
|   (JS Code)     |
|                 |
|   libuv <------> OS
 -----------------

libuv features

File system operations

Network I/O

Timers

Thread Pool

Event Loop

libuv is the “genie” that gives JavaScript its superpower of async behavior in Node.js.

6. What Happens Internally?

When V8 encounters async code such as:

fs.readFile()

http.get()

setTimeout()

It sends these tasks to libuv, which manages them in the background.
Once completed, libuv pushes the callbacks into the Event Loop, which puts them back into the call stack when the main thread is free.

7. Summary

JS is synchronous by default.

Node.js uses libuv to add async capability.

libuv handles:

File I/O

Network calls

Timers

Thread pool operations

Event loop ensures callbacks are processed efficiently.