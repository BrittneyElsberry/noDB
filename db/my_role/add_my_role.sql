INSERT INTO my_role (my_role, user_id)
VALUES ($1, $2)
returning *;