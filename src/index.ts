import { readFile } from "fs/promises";
import { createServer } from "http";
import { extname, join } from "path";

const server = createServer(async (req, res) => {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end();
    return;
  }

  const filePath = join(
    __dirname,
    "public",
    ...(req.url === "/" ? ["index.html"] : req.url?.split("/")!)
  );

  const fileExtension = extname(filePath);

  let contentType = "text/html";

  switch (fileExtension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
  }

  // * response
  try {
    //
    const file = await readFile(filePath, "utf-8");

    res.writeHead(200, {
      "Content-Type": contentType,
    });
    res.end(file);

    return;
    //
  } catch {
    //
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end(await readFile(join(__dirname, "public", "404.html"), "utf-8"));

    return;
    //
  }
});

const PORT = process.env.PORT ?? 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
