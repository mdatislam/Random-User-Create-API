module.exports.getRandomUser = (req, res, next) => {
    res.send("This is random user controller")
}

module.exports.getAllUsers = (req, res, next) => {
  res.send("This is All user controller");
};
