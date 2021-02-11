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

  const [formCompleted, setFormCompleted] = useState('')
//INPUTS
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [website, setWebsite] = useState('')

  //FUNCTION TO CHECK FOR ERRORS ON SUMBIT
  function handleSubmit(e){ 
    let emailValidator = validator.isEmail(email)
    let urlValidator = validator.isURL(website)
    e.preventDefault()
    name === '' ? setNameError('Cannot be blank') : setNameError('')
    username === '' ? setUsernameError('Cannot be blank') : setUsernameError('')
    password === '' ? setPasswordError('Cannot be blank') : setPasswordError('')
    confirmPassword !== password ? setConfirmPasswordError('Passwords do not match') :setConfirmPasswordError('')
    emailValidator === false ? setEmailError('Invalid email') : setEmailError('')
    urlValidator === false ? setWebsiteError('Invalid url') : setWebsiteError('')

    if (nameError === '' && emailError === '' && usernameError === '' && passwordError === '' && confirmPasswordError === '' && websiteError === '' ){
    setFormCompleted('Thank You')
       }else{
       setFormCompleted('')
       }
  }
  
  return (
    <div id='theWholeShabang'>
     <form onSubmit={handleSubmit}> 


     <h1 className={formCompleted !== '' ? 'form-complete' : 'form-not-complete'} > {formCompleted}</h1>
     <h1 className='text-label' >Proflie Form - All fields required</h1>

       <label id='text-position' className={nameError !== ''? 'text-label-red' : 'text-label'} htmlFor='name'>Name: {nameError}</label>
       <input placeholder=" Enter Name Here" className={nameError !== ''? 'input-box' : 'text-label'} type="text" onChange={(e) => setName(e.target.value)}/>

       <label id='text-position' className={emailError !== ''? 'text-label-red' : 'text-label'} htmlFor='email'>Email: {emailError}</label>
       <input placeholder=" Enter Email Here" className={emailError !== ''? 'input-box' : 'text-label'} type="text" onChange={(e) => setEmail(e.target.value)}/>

       <label id='text-position' className={usernameError !== ''? 'text-label-red' : 'text-label'} htmlFor='username'>Username: {usernameError}</label>
       <input placeholder=" Enter Username Here" className={usernameError !== ''? 'input-box' : 'text-label'} type="text" onChange={(e) => setUsername(e.target.value)}/>
       
       <label id='text-position' className={passwordError !== ''? 'text-label-red' : 'text-label'} htmlFor='password'>Password: {passwordError}</label>
       <input type='password' placeholder=" Enter Password Here" className={passwordError !== ''? 'input-box' : 'text-label'} onChange={(e) => setPassword(e.target.value)}/>

       <label id='text-position' className={confirmPasswordError !== ''? 'text-label-red' : 'text-label'} htmlFor='confirmPassword'>Confirm password:{confirmPasswordError}</label>
       <input type='password' placeholder="Confirm Password Here" className={confirmPasswordError !== ''? 'input-box' : 'text-label'} onChange={(e) => setConfirmPassword(e.target.value)}/>

       <label id='text-position' className={websiteError !== ''? 'text-label-red' : 'text-label'} htmlFor='website'>Website: {websiteError}</label>
       <input placeholder=" Enter Website Here" className={websiteError !== ''? 'input-box' : 'text-label'} type="text" onChange={(e) => setWebsite(e.target.value)}/>
       
       <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;