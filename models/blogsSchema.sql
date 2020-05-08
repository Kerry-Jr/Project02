DROP DATABASE IF EXISTS blogs_db;
CREATE DATABASE blogs_db;
USE blogs_db;

CREATE TABLE blogs(
	id INT AUTO_INCREMENT NOT NULL,
    author VARCHAR (30) NOT NULL,
    postDate DATETIME,
    content TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE comments(
	id INT AUTO_INCREMENT NOT NULL,
    blogId INT NOT NULL,
    poster TEXT NOT NULL,
    messages TEXT NOT NULL,
    PRIMARY KEY(id)
    );
    
