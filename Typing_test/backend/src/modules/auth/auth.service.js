import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { findUserByEmail, createUser, findUserById } from "./auth.repository.js";

const SALT_ROUNDS = 10;

export async function registerUser(email, password) {

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = {
        id: uuidv4(),
        email,
        password_hash: hashedPassword
    };

    await createUser(user);

    return { message: "User registered successfully" };
}

export async function loginUser(email, password) {

    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    return { token };
}

export async function getUserProfile(userId) {
    
    const user = await findUserById(userId);

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}