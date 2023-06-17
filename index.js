const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 4001;
const middleware = [
    express.json(),
    express.urlencoded({ extended: true }),
    cookieParser(),
    require("morgan")("dev"),
    require("cors")({
        credentials: true,
        origin: ["http://localhost:5173"],
    }),
];

app.use(middleware);
app.use(require("./routes"));

app.listen(PORT, () => console.log(`Alhamdu lillah Server: ${PORT}`));
