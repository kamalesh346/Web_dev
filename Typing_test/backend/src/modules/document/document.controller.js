import { fetchRandomDocument } from "./document.service.js";

export async function getRandomDocumentController(req, res) {

    try {
        
        const { difficulty } = req.query;

        const document = await fetchRandomDocument(difficulty);

        res.json(document);

    } catch (error) {

        res.status(404).json({ error: error.message });
    }
}