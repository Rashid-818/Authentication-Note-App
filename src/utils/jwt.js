import jwt from "jsonwebtoken"

// Generate JWT
const generateJWT = (payload) => {
    return jwt.sign(payload, process.env.SECRET_JWT_KEY, { expiresIn: process.env.JWT_Expiry })
}

// Verify JWT
const verifyJWT = (token)=>{
    return jwt.verify(token,process.env.SECRET_JWT_KEY)
}

export {
    generateJWT,
    verifyJWT
}