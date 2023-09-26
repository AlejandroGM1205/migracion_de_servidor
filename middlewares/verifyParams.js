const verifyParams = (req, res, next) => {
    const {Completed} =req.params;

    if (!Completed) {
        return res.status(400).json({error: 'Parametros incorrectos.'});
    }
    next();
}

module.exports = verifyParams;