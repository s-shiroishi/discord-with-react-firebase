import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

const App = () => {

  return (
    <div className='h-screen w-screen flex'>
      <Sidebar/>
      <Chat/>
    </div>
  )
}

export default App
