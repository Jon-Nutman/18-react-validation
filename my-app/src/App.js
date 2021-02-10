
import { useState } from 'react';
import validator from 'validator'
import './App.css';

function App() {
  //ERRORS
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [websiteError, setWebsiteError] = useState('')
//INPUTS
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [website, setWebsite] = useState('')




  function handleSubmit(e){ 
    let emailValidator = validator.isEmail(email)
    let urlValidator = validator.isURL(website)
    e.preventDefault()
    console.log(validator)
    name === '' ? setNameError('Cannot be blank') : setNameError('')
    username === '' ? setUsernameError('Cannot be blank') : setUsernameError('')
    password === '' ? setPasswordError('Cannot be blank') : setPasswordError('')
    confirmPassword !== password ? setConfirmPasswordError('Passwords do not match') :setConfirmPasswordError('')
    emailValidator == false ? setEmailError('Invalid email') : setEmailError('')
    urlValidator == false ? setWebsiteError('Invalid url') : setWebsiteError('')
  }
  return (
    <div>
     <form onSubmit={handleSubmit}> 

       <label className={nameError !== ''? 'text-label-red' : 'text-label'} htmlFor='name'>Name: {nameError}</label>
       <input className={nameError !== ''? 'text-label-red' : 'text-label'} type="text" onChange={(e) => setName(e.target.value)}/>

       <label className={emailError !== ''? 'text-label-red' : 'text-label'} htmlFor='email'>Email: {emailError}</label>
       <input className={emailError !== ''? 'text-label-red' : 'text-label'} type="text" onChange={(e) => setEmail(e.target.value)}/>

       <label className={usernameError !== ''? 'text-label-red' : 'text-label'} htmlFor='username'>Username: {usernameError}</label>
       <input className={usernameError !== ''? 'text-label-red' : 'text-label'} type="text" onChange={(e) => setUsername(e.target.value)}/>
       
       <label className={passwordError !== ''? 'text-label-red' : 'text-label'} htmlFor='password'>Password: {passwordError}</label>
       <input className={passwordError !== ''? 'text-label-red' : 'text-label'} type="text" onChange={(e) => setPassword(e.target.value)}/>

       <label className={confirmPasswordError !== ''? 'text-label-red' : 'text-label'} htmlFor='confirmPassword'>Confirm password:{confirmPasswordError}</label>
       <input className={confirmPasswordError !== ''? 'text-label-red' : 'text-label'} type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>

       <label className={websiteError !== ''? 'text-label-red' : 'text-label'} htmlFor='website'>Website: {websiteError}</label>
       <input className={websiteError !== ''? 'text-label-red' : 'text-label'} type="text" onChange={(e) => setWebsite(e.target.value)}/>
       
       <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
