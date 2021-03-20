let myRole = ''

const job = require('./jobListing.json')

let careerSkills = []
let id = 1;



//let goals = [{id:0, goal: '', startDate: '', endDate: '', complete: false}]

module.exports = {

getSkills: (req, res)=> {
    res.status(200).send(careerSkills)
},

addSkills: (req, res)=> {
    const {skills} = req.body
    const newSkill = {id, skills}
    careerSkills.push(newSkill)
    id++
    res.status(200).send(careerSkills)
    const db = req.app.get('db')
    
},

/**    createPost: (req, res) => {
      //code here

      const db = req.app.get('db')
      const {id} = req.session.user
      const {title, img, content} = req.body
      const date = new Date
      if(id){
        db.post.create_post([id, title, img, content, date])
       return res.status(200)
      } else {
        return res.status(403)
      }

    }, */

editSkills: (req, res)=>{
    const {skills} = req.body
    const {id} = req.params
    const findId = careerSkills.findIndex(skill => skill.id === +id)
    careerSkills[findId] = {...careerSkills[findId], skills: skills}
    res.status(200).send(careerSkills)
},

deleteSkills: (req, res)=> {
    const {id} = req.params
    const findId = careerSkills.findIndex(skill => skill.id === +id)
    careerSkills.splice(findId, 1)
    res.status(200).send(careerSkills)
},

getJobListing: (req, res)=> {
    res.status(200).send(job)
},

getMyRole: (req, res)=> {
    const {roleTitle} = req.body
    myRole = roleTitle
    res.status(200).send(myRole)
}




}