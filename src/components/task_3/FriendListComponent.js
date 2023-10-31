import {
  ListFriendsItem,
  Avatar,
  StatusTrue,
  StatusFalse,
  UserName,
} from './FriendList.styled';

export const ItemFriendList = val => {
  return (
    <ListFriendsItem>
      {val.isOnline ? <StatusTrue></StatusTrue> : <StatusFalse></StatusFalse>}
      <Avatar src={val.avatar} alt={val.name} width="48" />
      <UserName>{val.name}</UserName>
    </ListFriendsItem>
  );
};
