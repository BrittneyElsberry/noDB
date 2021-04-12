DROP TABLE if exists careerAcc;
DROP TABLE if exists users;
DROP TABLE if exists comments;
DROP TABLE if exists goals;

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


CREATE TABLE goals (

goal_id SERIAL PRIMARY KEY,
goal VARCHAR(2000),
start_date date,
end_date date,
user_id INT REFERENCES users(user_id));

CREATE TABLE comments(
comment_id SERIAL PRIMARY KEY,
comment varchar(2000),
date date,
goal_id INT REFERENCES goals(goal_id),
user_id INT REFERENCES users(user_id));

CREATE TABLE my_role (
SERIAL PRIMARY KEY role_id,
my_role varchar(100),
user_id INT REFERENCES users(user_id));


SELECT * from careerAcc;
SELECT * from users;
SELECT * from goals;
SELECT * from comments;
SELECT * from my_role;


