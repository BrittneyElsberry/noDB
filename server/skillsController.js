module.exports = {

    getSkills: async (req, res)=>{
        try{
            const {user_id} = req.session.user
            const db = req.app.get('db')
            const getskills = await db.skills.get_skills([user_id])
            console.log(getskills, 'getskills controller function')
            res.status(200).send(getskills)
        }
        catch (error){
           res.status(500).send(error)
        }

    },
    
    addSkills: async (req, res)=> {
        try{

            const {user_id} = req.session.user
            const {skills} = req.body

            const db = req.app.get('db')
            const addskills = await db.skills.add_skills([skills, user_id])
            res.status(200).send(addskills)
        }
        catch (error){
            console.log(error)
        }

    },

    editSkills: async (req, res)=>{
        try{

            const {id} = req.params
            const {skills} = req.body
            const {user_id} = req.session.user
            const db = req.app.get('db')
            const editskills = await db.skills.edit_skills([skills, id])
            const getAllSkills = await db.skills.get_skills([user_id])
            res.status(200).send(getAllSkills)
        }

        catch(error){
            res.status(500).send(error)
        }


    },

    deleteSkills: async (req, res)=>{
        try{
            const {id} = req.params
            console.log(id, 'delete skills params')
            const db = req.app.get('db')
            const deleteskills = await db.skills.delete_skills([id])
            res.sendStatus(200)

        }
        catch (err){
            console.log(err)
        }


    }




}