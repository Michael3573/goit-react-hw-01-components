import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
  margin-top: 20px;
  width: 200px;
  margin: auto;
  margin-bottom: 40px;
`;

export const StatisticList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StatisticTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StatisticItem = styled.li`
  background-color: ;
  border-radius: 4px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid gray;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
`;

export const Percentage = styled.span`
  font-size: 14px;
  color: green;
`;
