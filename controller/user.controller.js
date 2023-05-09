
const fs = require("fs");
const jsonString = fs.readFileSync("./public/userData.json");
const customer = JSON.parse(jsonString);
 
module.exports.getRandomUser = async (req, res, next) => {
  try {
 
    let x = Math.floor(Math.random() * customer.length +1);
    //console.log(x)
    const name = customer.filter(n => n.id ===Number(x))
   
    res.status(200).json({ success: true, data: name });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: customer });
  } catch (error) {
    next(error);
  }
};
