const { randomBytes } = require("crypto");

module.exports = {
  login: async (req, res) => {
    const accessToken = randomBytes(64).toString("hex");
    const refreshToken = randomBytes(64).toString("hex");
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.json({ refreshToken });
  },
  getCredentials: async (req, res) => {
    console.log(req.headers);
    const cookies = req.cookies;
    res.status(202).json(cookies);
  },
  logout: async (req, res) => {
    res.clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    });
    res.clearCookie("refreshToken", {
      sameSite: "none",
      secure: true,
    });
    const cookies = req.cookies;
    res.status(202).json(cookies);
  },
};
