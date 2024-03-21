import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvide'
function App() {

  return (
      <div className='text-white'>
      <UserContextProvider>
      <h1 className='text-5xl font-semibold mb-5'>Context API In React </h1>
      <Login/>
      <Profile/>
      </UserContextProvider>
      </div>
  )
}

export default App
