import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import { FriendliI, FriendListUl } from "./FriendList.styled";

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendliI key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </FriendliI>
        );
      })}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
