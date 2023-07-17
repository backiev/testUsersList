import { useState } from 'react'
import './App.css'
import './styles/main.sass'
import {Lists} from './components/Lists'
import {UserInfo} from './components/UserInfo'


function App() {
  // Выбранный пользователь из списка всех пользователей
  const [userId, setUserId] = useState(0);
  const changeUserId = (id) => {
    setUserId(id);
  }
  return (
    <div className='wrapper'>
      <Lists changeUserId={changeUserId} />
      <UserInfo userId={userId} />
    </div>
  )
}

export default App
