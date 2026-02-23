export function validateDifficultyQuery(req, res, next) {

    const { difficulty } = req.query;

    const allowed = ["easy", "medium", "hard"];

    if (difficulty && !allowed.includes(difficulty)) {
        return res.status(400).json({
            error: "Invalid difficulty. Allowed values: easy, medium, hard"
        });
    }

    next();
}