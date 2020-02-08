DROP DATABASE IF EXISTS beer_db;
CREATE DATABASE beer_db;
USE beer_db;
CREATE TABLE IF NOT EXISTS users
(
 	id int NOT NULL AUTO_INCREMENT,
	userFirst varchar(255) NOT NULL,
    userLast varchar(255) NOT NULL,
	beer varchar(255) NOT NULL,
    EmailAddress varchar(20),
	PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS beers
 (  
    id int NOT NULL AUTO_INCREMENT,
    style varchar(255) NOT NULL,
    description VARCHAR (500) NOT NULL,
    PRIMARY KEY (id)
 );
 CREATE TABLE IF NOT EXISTS questions    
 (  
    id int NOT NULL AUTO_INCREMENT,
    question VARCHAR (1000) NOT NULL,
    PRIMARY KEY (id)
     );
CREATE TABLE IF NOT EXISTS answers
(
 id INT NOT NULL AUTO_INCREMENT,
 question_id INT NOT NULL,
    answer VARCHAR (255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
    );

