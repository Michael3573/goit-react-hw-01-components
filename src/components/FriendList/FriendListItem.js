import {
  FriendListItemOnline,
  FriendListItemOfline,
  FriendName,
  ImageFriend,
} from "./FriendList.styled";

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <>
      {isOnline ? (
        <FriendListItemOnline>{isOnline}</FriendListItemOnline>
      ) : (
        <FriendListItemOfline>{isOnline}</FriendListItemOfline>
      )}
      <ImageFriend src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
}
