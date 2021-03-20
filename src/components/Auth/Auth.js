import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Auth = (props) =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
useEffect(()=>{

axios.post('/auth/register', {username, password}).then((res)=>{
    setUsername(res.data)
    setPassword(res.data)
}).catch(err=> console.log(err))

}, [])

/**axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res)=>{
    setList(res.data.results)
    console.log(res.data.results)
}).catch(err => console.log(err))   */

    const handleRegister = ()=>{

    }


    const handleSignIn =(e)=>{
        e.preventDefault()
        props.add(username)
        props.add(password)
        setUsername('')
        setPassword('')

    }

return (
    <div>
   <h1>Login Page</h1>
   <form onSubmit={handleSignIn}>
     <p>Username</p><input />
    <p>Password</p> <input />

   </form>
  

    </div>
 
)    


}

export default Auth

/**import React, { useState } from 'react'

const AddTodo = (props) => {
  const [userInput, setUserInput] = useState('')

  function handleAddTodo(e) {
    e.preventDefault()
    props.addTodo(userInput)
    setUserInput('')
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        placeholder="Add a todo!"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
export default AddTodo */
