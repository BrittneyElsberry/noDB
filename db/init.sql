DROP TABLE if exists careerAcc;
DROP TABLE if exists users;


CREATE TABLE users (

user_id SERIAL PRIMARY KEY,
email VARCHAR (50) NOT NULL,
password VARCHAR (5000) NOT NULL,
first_name VARCHAR(100),
last_name VARCHAR(100)
);

CREATE TABLE careerAcc (
accomp_id SERIAL PRIMARY KEY, 
accomplishments VARCHAR(2000),
user_id INT REFERENCES users(user_id));



SELECT * from careerAcc;
SELECT * from users;


