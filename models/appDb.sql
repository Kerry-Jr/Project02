CREATE DATABASE blogs_db;
USE blogs_db;

CREATE TABLE blogs(
	id INT AUTO_INCREMENT NOT NULL,
    author VARCHAR (30) NOT NULL,
    dates DATE,
    text VARCHAR(450) NOT NULL,
    PRIMARY KEY(id)
);