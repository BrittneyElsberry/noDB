DELETE from careerAcc where accomp_id = $1
returning *;