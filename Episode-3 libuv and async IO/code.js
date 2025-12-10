// SYNCHRONOUS
var a = 102346;
var b = 535231;
function multiplyFn(x, y) {
    const result = x * y
    return result
}
var c = multiplyFn(a, b)
console.log(c)


// ASYNCHRONOUS

http.get("https://api.fbi.com", (res) => {
    console.log("Secret data:", res.secret);
});

fs.readFile("gossip.txt", "utf8", (data) => {
    console.log("File data:", data);
});

setTimeout(() => {
    console.log("Waited for 5 seconds");
}, 5000);