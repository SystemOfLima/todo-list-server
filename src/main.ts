require("dotenv/config");

const port = Number(process.env.EXPRESS_PORT);

console.log(`> Server Online - http://localhost:${port}`);
