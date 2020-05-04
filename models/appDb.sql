CREATE DATABASE todos_db;
USE todos_db;
CREATE TABLE todos(
	id INT AUTO_INCREMENT NOT NULL,
    text VARCHAR(50) NOT NULL,
    completed BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
