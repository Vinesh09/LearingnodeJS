// errro show
module.exports = (err, req, res, next) => {
  let value = "";
  let message = err.message;
  if (err.code === 11000) {
    value = Object.values(err.keyValue).map((e) => e);

    message = `This ${value} already in use ! Try with another one `;
  }
  console.log(err, err.status);
  res.json({ msg: message, status: err.status });
};
