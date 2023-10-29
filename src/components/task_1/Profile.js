import { ProfileCard, Description, Avatar, Username, OtherInfo, StatusList, StatusListItem, Label, Quantity } from "./Profile.styled";

export const Profile = (p) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={p.avatar} alt={p.username}/>
        <Username>{p.username}</Username>
        <OtherInfo>@{p.tag}</OtherInfo>
        <OtherInfo>{p.location}</OtherInfo>
      </Description>

      <StatusList>
        <StatusListItem>
          <Label>Followers</Label>
          <Quantity>{p.stats.followers}</Quantity>
        </StatusListItem>
        <StatusListItem>
          <Label>Views</Label>
          <Quantity>{p.stats.views}</Quantity>
        </StatusListItem>
        <StatusListItem>
          <Label>Likes</Label>
          <Quantity>{p.stats.likes}</Quantity>
        </StatusListItem>
        </StatusList>
    </ProfileCard>
  );
};

// {/* <Profile
//   pname={p.pname}
//   tag={p.tag}
//   location={p.location}
//   avatar={p.avatar}
//   stats={p.stats}
// /> */}
