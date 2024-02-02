module.exports = func => (req,res,next) =>
    Promise.resolve(func(req,res,next)).catch(next)
//ES6 syntax no need return statment if no {}