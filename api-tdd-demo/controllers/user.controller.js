const User = require("../user");

const getUsers = (req, res) => {
  res.status(200).json(User);
};

const getUser = (req, res) => {
  const user = User.find((user) => user.id === req.params.id);
  if (user) {
    res.json(user);
  }
  res.status(404).json({ message: "User not found" });
};

module.exports = {
  getUser,
  getUsers,
};
