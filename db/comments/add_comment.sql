INSERT INTO comments (comment, date, goal_id, user_id)
VALUES ($1, $2, $3, $4)
returning *;