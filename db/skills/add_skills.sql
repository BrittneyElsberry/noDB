INSERT INTO careerAcc (accomplishments, user_id)
VALUES ($1, $2)
returning *;