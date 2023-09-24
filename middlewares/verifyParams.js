const verifyParams = (req, res, next) => {
    const {param1, param2} =req.params;

    if (!param1 || !param2) {
        return res.status(400).json({error: 'Parametros incorrectos.'});
    }
    next();
}

module.exports = verifyParams;