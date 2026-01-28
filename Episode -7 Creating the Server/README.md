🖥️ Creating a Server
❓ What is a Server?

A server is a system that provides data or services to other systems (clients) over a network.

The term server can refer to two things:

1️⃣ Server as Hardware

A physical machine (computer)

Has CPU, RAM, storage, network card

Stays connected to the internet

Serves multiple clients simultaneously

Example:
A cloud machine on AWS, Azure, or a college lab server.

2️⃣ Server as Software

A program that listens for client requests

Processes requests

Sends responses back

Examples:

Apache

Nginx

Node.js HTTP server

Express server

👉 In Node.js, we usually mean server as software

🚀 Deploying an Application on a Server

When someone says “deploy your app on a server”, they usually mean:

1️⃣ Hardware

A physical or virtual machine where your app will run.

2️⃣ Operating System (OS)

The server runs an OS like:

Linux (most common)

Windows

3️⃣ Server Software

The program that listens for requests:

Node.js

Express

Apache, etc.

Your application runs inside this environment.

🔁 Client–Server Architecture

Client → Requests data (browser, mobile app)

Server → Sends data (API, files, responses)

Each client:

Has an IP address

Opens a socket connection to the server

Each server:

Has an IP address

Listens on a port

📌 Example:

Client → http://102.209.1.3:3000

🔌 How socket connection works (HTTP)

Client opens a socket connection

Sends a request

Server processes it

Server sends response

Connection closes

➡️ Every request = new connection

❓ Can I create multiple servers?

✅ Yes

You can run multiple servers on the same machine using different ports.

Example:

102.209.1.3:3000 → App 1
102.209.1.3:4000 → App 2


The IP + Port uniquely identifies a server.

🔄 Socket vs WebSocket
Socket (HTTP)

Connection opens

Request–response happens

Connection closes

Not real-time

WebSocket

Connection stays open

Two-way communication

Real-time updates

Used in:

Chat apps

Live notifications

Online games