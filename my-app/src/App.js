
import { useState } from 'react';
import validator from 'validator'
import './App.css';

function App() {
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [website, setWebsite] = useState('')

  function handleSubmit(e){ 
    e.preventDefault()
    name === '' ? setNameError('Cannot be blank') : setNameError('')
    username === '' ? setUsernameError('Cannot be blank') : setUsernameError('')
    password === '' ? setPasswordError('Cannot be blank') : setPasswordError('')
    // confirmPassword !== password ? setError('Passwords do not match') : setError('')
    // validator.isEmail(email) = false ? setError('Invalid email') : setError('')
    // validator.isUrl(website) = false ? setError('Invalid url') : setError('')
  }
  return (
    <div>
     <form onSubmit={handleSubmit}> 

       <label htmlFor='name'>Name: {nameError}</label>
       <input type="text" onChange={(e) => setName(e.target.value)}/>

       <label htmlFor='email'>Email:</label>
       <input type="text" onChange={(e) => setEmail(e.target.value)}/>

       <label htmlFor='username'>Username:{usernameError}</label>
       <input type="text" onChange={(e) => setUsername(e.target.value)}/>
       
       <label htmlFor='password'>Password:{passwordError}</label>
       <input type="text" onChange={(e) => setPassword(e.target.value)}/>

       <label htmlFor='confirmPassword'>Confirm password:</label>
       <input type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>

       <label htmlFor='website'>Website</label>
       <input type="text" onChange={(e) => setWebsite(e.target.value)}/>
       
       <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
