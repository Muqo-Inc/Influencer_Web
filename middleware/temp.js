var myLogger = function (req, res, next) {
  console.log(req, "next is ", next);
  next();
};
module.exports = myLogger;
