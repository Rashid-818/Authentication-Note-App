import { verifyJWT } from "../utils/jwt.js";

function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json(
            {
                message: "Authenctication required"
            }
        )
    }

    const token = authHeader.split(" ")[1]

    try {
        const decode = verifyJWT(token)
        res.user = decode
        next()
    } catch (error) {
        return res.status(403).json(
            {
                message: "Invalid or Expired token"
            }
        )
    }
}

export {requireAuth}