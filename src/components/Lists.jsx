import {useSelector} from 'react-redux';

// eslint-disable-next-line react/prop-types
export const Lists = ({changeUserId}) => {
   const users = useSelector(state => state.users.users.length);
   const getUsersContent = users => {
      let content = [];
      for (let i = 0; i < 10; i++) {
         const item = i;
         content.push(
            <div className='lists-user' key={item} onClick={() => changeUserId(item)}>
               <div className='lists-user__name'>Пользователь {item + 1}</div>
            </div>
         );
      }
      return content;
    };
   return (
      <div className='lists'>
         {getUsersContent(users)}
      </div>
  )
}
