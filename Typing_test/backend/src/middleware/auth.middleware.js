import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token missing" });
    }

    // Format: Bearer TOKEN
    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // attach user info to request
        req.user = decoded;

        next();

    } catch (error) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }
}
