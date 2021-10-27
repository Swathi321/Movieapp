exports.verifyToken = async (req, res, next) => {
    try {

        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            let beareToken = bearerHeader.split(' ');
            let token = beareToken[1]
            if (token === 'FSMovies2021') {
                next();
            } else {
                return res.status(403).json({
                    status: 'fail',
                    message: "Unauthorised"
                });
            }
        } else {
            return res.status(403).json({
                status: 'fail',
                message: "Unauthorised"
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}