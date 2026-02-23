import { pool } from "../../db/pool.js";

//  getRandomDocument filter by difficulty  //

export async function getRandomDocument(difficulty) {

    let query = `
        SELECT id, content, difficulty
        FROM typing_documents
    `;

    const params = [];

    if (difficulty) {
        query += " WHERE difficulty = ?";
        params.push(difficulty);
    }

    query += " ORDER BY RAND() LIMIT 1";

    const [rows] = await pool.query(query, params);

    return rows[0];
}