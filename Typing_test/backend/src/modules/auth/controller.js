import { registerUser, loginUser, getUserProfile } from "./service.js";

export async function signup(req, res) {
    try {
        const { email, password } = req.body;

        const result = await registerUser(email, password);

        res.status(201).json(result);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const result = await loginUser(email, password);

        res.json(result);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function profile(req, res) {
    
    try {

        const userId = req.user.userId;

        const user = await getUserProfile(userId);

        res.json(user);

    } catch (error) {

        res.status(404).json({ error: error.msg })

    }
}