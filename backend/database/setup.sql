PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "applications" (id INTEGER PRIMARY KEY AUTOINCREMENT, title text NOT NULL, company text NOT NULL, location text, type text NOT NULL, industry text, status text NOT NULL, apply_date TEXT, interview_date TEXT, reject_date TEXT, notes text);
UPDATE sqlite_sequence SET seq = (SELECT IFNULL(MAX(id), 0) FROM applications) WHERE name = 'applications';
COMMIT;
