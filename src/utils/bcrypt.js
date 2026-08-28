import bcrypt from "bcrypt"


async function hashing(plainPassword) {
    return await bcrypt.hash(plainPassword, 12)
};

async function comparing(comparedPassword,hashedPassword){
    return await bcrypt.compare(comparedPassword,hashedPassword)
}

export { hashing, comparing }