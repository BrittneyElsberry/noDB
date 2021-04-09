INSERT INTO goals (goal, start_date, end_date, user_id)
VALUES($1, $2, $3, $4)
returning*;