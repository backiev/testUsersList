import userImage from '../assets/userImage.png';
import {useSelector, useDispatch} from 'react-redux';
import { changeField } from '../app/UsersSlice';



// eslint-disable-next-line react/prop-types
export const UserInfo = ({userId}) => {
   const user = useSelector(state => state.users.users[userId]);
   const dispatch = useDispatch();
   console.log(user);
  return (
   <div className='user'>
      <div className='user-header'>
         <div className='user-header__name'>Пользователь {userId + 1}</div>
      </div>
      <div className='user-info'>
         <div className='user-info__image'>
            <img className='user-info__image-item' src={userImage} alt="" />
         </div>
      <div className='user-info__inputs'>
         <div className='user-info__inputs-item'>
            <div>id</div>
            <input value={user.id} disabled />
         </div>
         <div className='user-info__inputs-item'>
            <div>Имя</div>
            <input value={user.firstName} 
               onChange={(e) => dispatch(changeField({
                  userId: userId,
                  property: 'firstName',
                  value: e.target.value
               }))}
            />
         </div>
         <div className='user-info__inputs-item'>
            <div>Фамилия</div>
            <input value={user.lastName} 
               onChange={(e) => dispatch(changeField({
                  userId: userId,
                  property: 'lastName',
                  value: e.target.value
               }))}
            />
         </div>
         <div className='user-info__inputs-item'>
            <div>Возраст</div>
            <input value={user.age} 
               onChange={(e) => dispatch(changeField({
                  userId: userId,
                  property: 'age',
                  value: e.target.value
               }))}
            />
         </div>
         <div className='user-info__inputs-item'>
            <div>Почта</div>
            <input 
               value={user.email} 
               onChange={(e) => dispatch(changeField({
                  userId: userId,
                  property: 'email',
                  value: e.target.value
               }))}
            />
         </div>
      </div>
      </div>
   </div>
  )
}
