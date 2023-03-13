const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    return res.status(500).send("oops! something broke");
}
module.exports = {errorHandler};