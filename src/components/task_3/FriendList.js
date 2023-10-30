import { ListFriends } from './FriendList.styled';
import { ItemFriendList } from './FriendListComponent';

export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(val => (
        <ItemFriendList
          key={val.id}
          isOnline={val.isOnline}
          avatar={val.avatar}
          name={val.name}
        ></ItemFriendList>
      ))}
    </ListFriends>
  );
};
