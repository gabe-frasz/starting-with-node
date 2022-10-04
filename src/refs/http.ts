import http from "http";

// * create server object
http.createServer((req, res) => {
    // write response
    res.writeHead(200, "OK", {
        "Content-Type": "text/plain",
    });
    res.write("hello world");
    res.end();
}).listen(5000, () => console.log(`Server running on port 5000`));
