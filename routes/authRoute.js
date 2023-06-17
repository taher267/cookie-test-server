const router = require("express").Router();
const authController = require("../controllers/authController");
router.get("/login", authController.login);
router.get("/credentials", authController.getCredentials);
router.get("/logout", authController.logout);
module.exports = router;
