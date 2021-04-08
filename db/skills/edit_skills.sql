UPDATE careerAcc
SET accomplishments = $1
WHERE user_id = $2
returning *;