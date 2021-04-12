module.exports = {

    getMyRole: async (req, res)=>{
        try{

            const {user_id} = req.session.user
            const db = req.app.get('db')
            const myRole = await db.my_role.get_my_role([user_id])
            console.log(myRole, 'getmyrole controller')
            res.status(200).send(myRole)
            
        }
        catch (error){
            res.status(500).send(error)
        }

    },


    addMyRole: async (req, res)=>{
        try{

            const {user_id} = req.session.user
            const {role} = req.body
            const db = req.app.get('db')
            console.log(role, user_id, 'addmyrole controller')
            const findanotherrole = await db.my_role.get_my_role([user_id])
            const foundRole = findanotherrole[0]
            if(foundRole){

             const deleteoldrole = await db.my_role.delete_role([user_id])   

            }
            const myRole = await db.my_role.add_my_role([role, user_id])
            res.status(200).send(myRole)
            
        }
        catch (error){
            res.status(500).send(error)
        }
    }
}