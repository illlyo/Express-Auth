-- Adjust columns as needed below before running migrate file
CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username VARCHAR UNIQUE NOT NULL,
	password_digest TEXT NOT NULL,
	email VARCHAR UNIQUE NOT NULL,
	name VARCHAR
);

-- Below lines allow user_id value to be brought in to other tables
-- Replace "table_name" with the actual table name you are manipulating
-- ALTER TABLE table_name
-- ADD COLUMN user_id INTEGER REFERENCES users(id);