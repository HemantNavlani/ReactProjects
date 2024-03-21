import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div className='text-white'>
        <h2 className='text-3xl '>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        className='rounded-lg text-black'
        placeholder="username"
         />

         &nbsp;&nbsp;&nbsp;
         <input type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         className='rounded-lg text-black'
         placeholder="password"
          />
         &nbsp;&nbsp;&nbsp;
          <button onClick={handleSubmit}
          className='rounded-lg bg-blue-500 py-2 px-4'
          >Submit</button>
    </div>
  )
}

export default Login