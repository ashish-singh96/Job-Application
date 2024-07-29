import jwt from 'jsonwebtoken';
const isAuthenticate = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = verified.userId;
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Invalid Token" });
    }
}

export default isAuthenticate;

