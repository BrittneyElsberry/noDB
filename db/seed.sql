CREATE TABLE careerAcc (
accomp_id INT PRIMARY KEY, 
accomplishments VARCHAR(2000));

INSERT INTO careerAcc(accomp_id, accomplishments)
VALUES (1, 'Team metrics exceeded expectations for FY21');

SELECT * from careerAcc;

CREATE TABLE career_users (

career_users_id INT PRIMARY KEY,
username VARCHAR (50) NOT NULL,
password VARCHAR (5000) NOT NULL

);