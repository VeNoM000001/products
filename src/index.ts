// on server errors
process.on("uncaughtException", (error) => console.log("uncaughtException: ", error));
process.on("unhandledRejection", (error) => console.log("unhandledRejection: ", error));

import app from "./app";

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
