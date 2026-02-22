import { v4 as uuidv4 } from "uuid";
import { createTestSession, getUserTests } from "./test.repository.js";

export async function submitTest(userId, testData) {

    const session = {
        id: uuidv4(),
        userId,
        ...testData
    };

    await createTestSession(session);

    return session;
}

export async function fetchUserTests(userId) {
    return await getUserTests(userId);
}
