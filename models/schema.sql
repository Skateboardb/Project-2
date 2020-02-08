DROP DATABASE IF EXISTS beer_db;
CREATE DATABASE beer_db;

USE beer_db;

CREATE TABLE IF NOT EXISTS users
(
 	id int NOT NULL AUTO_INCREMENT,
	userFirst VARCHAR (255) NOT NULL,
    userLast VARCHAR (255) NOT NULL,
    emailAddress VARCHAR (20),
	PRIMARY KEY (id)

);

CREATE TABLE IF NOT EXISTS beers
 (  
    id int NOT NULL AUTO_INCREMENT,
    beerName varchar(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES users(id) 
 );

