import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeSlice } from '../app/UsersSlice';

// eslint-disable-next-line react/prop-types
export const Lists = ({changeUserId}) => {
   const users = useSelector(state => state.users.users.length);
   const dispatch = useDispatch();

   // Заполнение списка пользователей исходя из количества всех пользователей
   const getUsersContent = users => {
      let content = [];
      for (let i = 0; i < users; i++) {
         const item = i;
         content.push(
            <div className='lists-user' key={item} onClick={() => changeUserId(item)}>
               <div className='lists-user__name'>Пользователь {item + 1}</div>
            </div>
         );
      }
      return content;
   };

   // Смотрим когда прокрутка дойдет до самого низа
   const scrollHandler = (e) => {
      if ((e.target.scrollHeight - e.target.scrollTop) < 1000 ) {
         dispatch(changeSlice(users + 10))
      }
   }
   useEffect(() => {
      document.querySelector('.lists').addEventListener('scroll', scrollHandler);
      return function () {
         document.querySelector('.lists').removeEventListener('scroll', scrollHandler);
      }
   }, [users]);

   
   return (
      <div className='lists'>
         {getUsersContent(users)}
      </div>
  )
}
