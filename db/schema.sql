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
    beerName varchar(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES users(id)
 );

 CREATE TABLE IF NOT EXISTS questions
 (  
    id int NOT NULL AUTO_INCREMENT,
    question VARCHAR (1000) NOT NULL
    most_neg BOOLEAN NOT NULL DEFAULT FALSE,
    some_neg BOOLEAN NOT NULL DEFAULT FALSE, 
    neut BOOLEAN NOT NULL DEFAULT FALSE, 
    some_pos BOOLEAN NOT NULL DEFAULT FALSE, 
    some_pos BOOLEAN NOT NULL DEFAULT FALSE, 
    PRIMARY KEY (id)
     );

