import { submitTest, fetchUserTests } from "./test.service.js";

export async function submitTestController(req, res) {
    try {

        const userId = req.user.userId;
        const { documentId, duration, wpm, accuracy } = req.body;

        const session = await submitTest(userId, {
            documentId,
            duration,
            wpm,
            accuracy
        });

        res.status(201).json(session);

    } catch (error) {
        console.error("Submit Test Error:", error); // 👈 ADD THIS
        res.status(500).json({ error: error.message });
    }
}

export async function getUserTestsController(req, res) {

    try {

        const userId = req.user.userId;

        const tests = await fetchUserTests(userId);

        res.json(tests);

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tests" });
    }
}
