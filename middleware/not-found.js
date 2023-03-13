const not_found = (req, res, next) => res.status(404).json({messg : "not found"});

module.exports = {not_found};