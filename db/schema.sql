DROP DATABASE IF EXISTS beer_db;
CREATE DATABASE beer_db;

USE beer_db;

CREATE TABLE IF NOT EXISTS users
(
 	id int NOT NULL AUTO_INCREMENT,
	userFirst varchar(255) NOT NULL,
    userLast varchar(255) NOT NULL,
    emailAddress varchar(20),
	PRIMARY KEY (id)

);

CREATE TABLE IF NOT EXISTS beers
 (  
    id int NOT NULL AUTO_INCREMENT,
    beerName varchar(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES users(id) 
 );

