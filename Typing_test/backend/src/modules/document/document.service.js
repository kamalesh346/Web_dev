import { getRandomDocument } from "./document.repository.js";

export async function fetchRandomDocument(difficulty) {

    const doc = await getRandomDocument(difficulty);

    if (!doc) {
        throw new Error("No documents available given difficulty");
    }

    return doc;
}