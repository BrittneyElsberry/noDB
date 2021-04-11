module.exports ={

    getComments: async (req, res)=>{
        try{

            const {user_id} = req.session.user
            const db = req.app.get('db')
            const getComments = await db.comments.get_comments([user_id])
            res.status(200).send(getComments)
        }
        catch(error){
            res.status(500).send(error)
        }
    }, 

    addComment: async (req, res) => {
        try{

            const {id} = req.params
            const {user_id} = req.session.user
            const {comment} = req.body

            const db = req.app.get('db')
            const date = new Date

            console.log(id, comment, user_id, 'add comment controller' )

            const addC = await db.comments.add_comment([comment, date, id, user_id])
            const getAll = await db.comments.get_comments([user_id])
            res.status(200).send(getAll)
        }
        catch(error){
            res.status(500).send(error)
        }

    },

    editComment: async (req, res)=> {
        try{
            const {id} = req.params
            const {comment} = req.body
            const {user_id} = req.session.user
            const db = req.app.get('db')
            const editC = await db.comments.edit_comment([comment, id])
            const getAllComments = await db.comments.get_comments([user_id])
            res.status(200).send(getAllComments)
        }
        catch(error){
            res.status(500).send(error)
        }
    },

    deleteComment: async (req, res)=>{
        try{

            const db = req.app.get('db')
            const {comment_id} = req.params
            const dlte = await db.comments.delete_comment([comment_id])
            res.sendStatus(200)
        }
        catch(error){
            res.status(500).send(error)
        }
    }
}