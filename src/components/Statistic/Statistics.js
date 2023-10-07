import PropTypes from "prop-types";
import {
  StatisticsSection,
  StatisticList,
  StatisticItem,
  StatisticTitle,
  Label,
  Percentage,
} from "./Statistics.styled";
export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
