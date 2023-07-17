import userImage from '../assets/userImage.png'

export const UserInfo = () => {
  return (
   <div className='user'>
      <div className='user-header'>
         <div className='user-header__name'>Пользователь 1</div>
      </div>
      <div className='user-info'>
         <div className='user-info__image'>
            <img className='user-info__image-item' src={userImage} alt="" />
         </div>
      <div className='user-info__inputs'>
         <div className='user-info__inputs-item'>
            <div>id</div>
            <input />
         </div>
         <div className='user-info__inputs-item'>
            <div>Имя</div>
            <input />
         </div>
         <div className='user-info__inputs-item'>
            <div>Фамилия</div>
            <input />
         </div>
         <div className='user-info__inputs-item'>
            <div>Возраст</div>
            <input />
         </div>
         <div className='user-info__inputs-item'>
            <div>Почта</div>
            <input />
         </div>
      </div>
      </div>
   </div>
  )
}
