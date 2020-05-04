CREATE DATABASE blogs_db;
USE blogs_db;

CREATE TABLE blogs(
	id INT AUTO_INCREMENT NOT NULL,
    text VARCHAR(50) NOT NULL,
    completed BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);