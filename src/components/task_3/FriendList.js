import { ListFriends, ListFriendsItem, Avatar, StatusTrue, StatusFalse, UserName } from './FriendList.styled'

export const FriendList = ({friends}) => {
    return (
    <ListFriends>
        {friends.map(val => 
        <ListFriendsItem key={val.id}>
        {val.isOnline ? <StatusTrue></StatusTrue> :  <StatusFalse></StatusFalse>}  
        <Avatar src={val.avatar} alt={val.name} width="48" />
        <UserName>{val.name}</UserName>
      </ListFriendsItem>)}
    </ListFriends>)}
    
