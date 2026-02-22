import { pool } from "../../db/pool.js";

export async function findUserByEmail(email) {
    const [rows] = await pool.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
    return rows[0];
}

export async function createUser(user) {
    const query = `
        INSERT INTO users (id, email, password_hash)
        VALUES (?, ?, ?)
    `;

    await pool.query(query, [
        user.id,
        user.email,
        user.password_hash
    ]);
}

export async function findUserById(userId) {
    
    const [rows] = await pool.query(
        "SELECT id, email, created_at FROM users WHERE ID = ?",[userId]
    );

    return rows[0];
}
