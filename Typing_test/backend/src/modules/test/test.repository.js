import {pool} from "../../db/pool.js"

export async function createTestSession(data) {
    
    const { id, userId, documentId, duration, wpm, accuracy } = data;

    await pool.query(
        `INSERT INTO test_sessions
        (id, user_id, document_id, duration_seconds, wpm, accuracy)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [id, userId, documentId, duration, wpm, accuracy]
    );
}

export async function getUserTests(userId) {

    const [rows] = await pool.query(
        `SELECT id, document_id, duration_seconds, wpm, accuracy, created_at
         FROM test_sessions
         WHERE user_id = ?
         ORDER BY created_at DESC`,
        [userId]
    );

    return rows;
}
