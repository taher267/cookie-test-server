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
        // origin: '*',
        origin: ["https://cookie-test.netlify.app", "http://localhost:5173"],
    }),
];
app.get("/", (req, res) => {
    res.cookie("test", "vafjskdfjdskafjksajfskdjfksdaj", {
        sameSite: "none",
        maxAge: 99999999999999,
        // signed: true,
    });
    res.json({});
});

app.use(middleware);
app.use(require("./routes"));

app.listen(PORT, () => console.log(`Alhamdu lillah Server: ${PORT}`));
