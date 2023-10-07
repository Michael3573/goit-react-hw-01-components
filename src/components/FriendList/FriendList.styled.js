import styled from "@emotion/styled";

export const FriendListUl = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

export const FriendliI = styled.li`
  display: flex;
  border-radius: 20%;
  border: 1px solid black;
  width: 150px;
  align-items: baseline;
  justify-content: center;
  background-color: rgba(15, 20, 17, 0.25);
  margin-bottom: 20px;
  padding: 10px;
`;

export const FriendListItemOnline = styled.span`
  width: 10px;
  height: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: green;
`;
export const FriendListItemOfline = styled.span`
  width: 10px;
  height: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: red;
`;

export const FriendName = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ImageFriend = styled.img`
  width: 48px;
  height: 48px;
`;
