import {
  StatisticsSection,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && (
        <>
          <Title>{title}</Title>
        </>
      )}
      <StatList>
        {stats.map(val => (
          <StatListItem key={val.id}>
            <Label>{val.label}</Label>
            <Percentage>{val.percentage}</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};
