require('dotenv').config()
const express = require('express')
authCTRL = require('./authController')
const bcrypt = require('bcryptjs')
const massive = require('massive')
const session = require('express-session')
const app = express()
const ctrl = require('./controller')


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())

massive()

//AUTH END POINTS


app.post('/auth/register', authCTRL.register)

/**app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout); */







//End points

app.get('/api/careerSkills', ctrl.getSkills) //test in postman was successful!!
app.post('/api/careerSkills', ctrl.addSkills) //test in postman successful
app.put('/api/careerSkills/:id', ctrl.editSkills)
app.delete('/api/careerSkills/:id', ctrl.deleteSkills)
app.get('/api/jobListing', ctrl.getJobListing)
app.post('/api/myRole', ctrl.getMyRole)
app.get('/api/home')


// const port = 3333
app.listen(SERVER_PORT, ()=> console.log(`Port listening on ${SERVER_PORT}`))


