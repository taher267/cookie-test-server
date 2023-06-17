const { randomBytes } = require("crypto");

module.exports = {
  login: async (req, res) => {
    const accessToken = randomBytes(64).toString("hex");
    const refreshToken = randomBytes(64).toString("hex");
    console.log(req.headers);
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
      secure: true,
    });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: true,
    });
    res.json({ accessToken, refreshToken });
  },
  getCredentials: async (req, res) => {
    console.log(req.headers);
    const cookies = req.cookies;
    res.status(202).json(cookies);
  },
  logout: async (req, res) => {
    res.clearCookie("accessToken", {
      maxAge: 0,
      httpOnly: true,
    });
    res.clearCookie("refreshToken", {
      maxAge: 0,
      httpOnly: true,
    });
    const cookies = req.cookies;
    res.status(202).json(cookies);
  },
};
