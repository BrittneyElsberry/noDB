module.exports = {

    getGoals: async (req, res)=>{

            try{

                const {user_id} = req.session.user
                const db = req.app.get('db')
                const goals = await db.goals.get_goals([user_id])
                res.status(200).send(goals)

            }
            catch(err){
                res.status(500).send(err)
            }

    },

    addGoal: async (req, res)=>{
        try{

            const {user_id} = req.session.user
            const {goal, startDate, endDate} = req.body
           const db = req.app.get('db')
           const goals = await db.goals.add_goal([goal, startDate, endDate, user_id])
           const sendAllGoals = await db.goals.get_goals([user_id])
           res.status(200).send(sendAllGoals)

        }
        catch(err){
            res.status(500).send(err)
        }

        
        

    },

    editGoal: async(req, res)=>{

        try{

            const db = req.app.get('db')
        }
        catch(err){
            res.status(500).send(err)
        }


    },

    deleteGoal: async(req, res)=>{
        try{

            const db = req.app.get('db')
        }
        catch(err){
            res.status(500).send(err)
        }

    }

}