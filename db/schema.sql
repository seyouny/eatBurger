CREATE DATABASE IF EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50),
    devoured BOOLEAN,
    PRIMARY KEY (id)

)