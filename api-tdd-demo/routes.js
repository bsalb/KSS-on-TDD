const router = require("express").Router();
const { getUsers, getUser } = require("./controllers/user.controller");

router.get("/user", getUsers);
router.get("/user/:id", getUser);

module.exports = router;
