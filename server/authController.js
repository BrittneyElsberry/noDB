const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res)=> {

        try{
        const {email, password, firstName, lastName}  = req.body
        console.log(req.body, 'register function')
        const db = req.app.get('db')
        const result = await db.users.find_user_by_email([email])
        const existingUser = result[0]
        console.log(result)
        if(existingUser){
            return res.status(409).send('Username taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const registeredUser = await db.users.create_user([email, hash, firstName, lastName])
        const user = registeredUser[0]
        delete user.password
        req.session.user = user
    //    return res.status(201).send(req.session.user) this is commented out in Workit
   
    }
    catch(err){
        console.log(err, 'this is a registration error')
    }
    },


    login: async (req, res)=>{
        const {email, password} = req.body
        const db = req.app.get('db')
        const foundUser = await db.find_user_by_username([email])
        const user = foundUser[0]
        if(!user){
            res.status(401).send('User not found. Please register as a new user before logging in')
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            res.status(403).send('Incorrect Password')
        }

        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
      
    },

    logout: (req, res)=>{
        req.session.destroy()
        return res.status(200)
    },

    getUser: (req, res)=>{
        const {user} = req.session
        // const db = req.app.get('db')
        if(user){
            return res.status(200).send(req.session.user)
        } else {
            return res.status(404)
        }
    }


}