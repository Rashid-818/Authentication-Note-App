import { User } from "../models/user.model.js";
import { comparing, hashing } from "../utils/bcrypt.js";
import { generateJWT } from "../utils/jwt.js";

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json(
                {
                    message: "All fields are required !"
                }
            )
        }


        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(409).json({ message: "username already exists..." })
            }
            return res.status(409).json({ message: "email already exists..." })
        }

        const hashedPassword = await hashing(password)

        const user = new User(
            {
                username,
                email,
                password: hashedPassword
            }
        )

        await user.save()

        const token = generateJWT(
            {
                id: user._id,
                username: user.username
            }
        )


        return res.status(201).json(
            {
                message: "Congrats🎉 your account is Ready...",
                userId: user._id,
                token: token
            }
        )

    } catch (error) {
        console.log(error);

        return res.status(500).json(
            {
                message: 'Server Error !!'
            }
        )
    }
}

const login = async (req, res) => {

    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json(
                {
                    message: "All fields are required !"
                }
            )
        }

        const user = await User.findOne({ username })
        if (!user) return res.status(401).json({ message: "invalid username or password !" })

        const comparingPassword = await comparing(password, user.password)
        if (!comparingPassword) return res.status(401).json({ message: "invalid username or password !" })

        const token = generateJWT(
            {
                id: user._id,
                username: user.username
            }
        )

        return res.status(200).json(
            {
                message: `Welcome Back! 😊`,
                token: token
            }
        )

    } catch (error) {

        return res.status(500).json(
            {
                message: "Server Error"
            }
        )
    }

}

// Exporting
export {
    signUp,
    login
}