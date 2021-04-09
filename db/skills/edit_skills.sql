UPDATE careerAcc
SET accomplishments = $1
WHERE accomp_id = $2
returning *;