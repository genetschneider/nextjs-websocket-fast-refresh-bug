import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { assetPrefix } from "../build";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Replace asset-prefix to route assets correctly to next
    req.url = req.url?.replace(`${assetPrefix}/`, "");

    console.log("Incoming request", req.url);

    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
