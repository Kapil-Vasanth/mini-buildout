import { useState } from "react"



function Login() {
    const [formData,setFormData] = useState({
        username:'',
        password:''
    })
    const [error,setError] = useState(false)
    const [login,setLogin] = useState(false)

    function handleChange(e){
        setFormData(prev => ({...prev,[e.target.name]:[e.target.value]}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData.username,formData.password)
        if(formData.username == "user" && formData.password == "password"){
            setError(false)
            setLogin(true)
        } else {
            setError(true)
        }
    }

    if(login){
        return (
            <>
                <h1>Login Page</h1>
                <p>Welcome User</p> 
            </>
        )
    }



  return (
    
    <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Page</h1>
        {error && <>Invalid Username and Password</>}
          <legend>Username</legend>
          <input type="text" name="username" required value={formData.username || ''} onChange={e => handleChange(e)} />
          <legend>Password</legend>
          <input type="password" name="password" value={formData.password || ''} onChange={handleChange} />
          <br />
          <button type="submit">Submit</button>
    </form>
  )
}

export default Login