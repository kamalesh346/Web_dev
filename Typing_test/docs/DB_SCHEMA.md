1️⃣ users
id (UUID)
email
password_hash
created_at
2️⃣ typing_documents
id
difficulty (easy | medium | hard)
content
length
3️⃣ test_sessions
id
user_id
document_id
start_time
end_time
duration_seconds
4️⃣ keystrokes (🔥 THIS IS YOUR USP)
id
session_id
expected_char
typed_char
timestamp
is_correct
5️⃣ test_results
session_id
wpm
accuracy
error_rate
backspace_count
