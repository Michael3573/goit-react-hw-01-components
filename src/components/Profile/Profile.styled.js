import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  align-items: center;
  background-color: rgba(15, 20, 17, 0.25);
  padding: 20px;
  width: 200px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

export const Stats = styled.ul`
  list-style-type: none;
  margin: 20px;
  padding: 0;
`;

export const StatItem = styled.li`
  // display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: flex-end;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`;

export const Quantity = styled.span`
  font-size: 14px;
  color: gray;
`;
