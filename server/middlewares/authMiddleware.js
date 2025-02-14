const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "Unauthorized user" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const isVerified = jwt.verify(token, process.env.JWT_SECRET);
        console.log(isVerified);
        req.user = isVerified; 
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = authMiddleware;
