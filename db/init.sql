DROP TABLE careerAcc if exists;

CREATE TABLE careerAcc (
accomp_id INT PRIMARY KEY, 
accomplishments VARCHAR(2000));



SELECT * from careerAcc;



CREATE TABLE users (

user_id INT PRIMARY KEY,
username VARCHAR (50) NOT NULL,
password VARCHAR (5000) NOT NULL,
first_name VARCHAR(100),
last_name VARCHAR(100)
);

