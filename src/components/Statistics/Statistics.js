import PropTypes from 'prop-types';
import { Request } from 'components/FeedbackOptions/FeedbackOptions.styled';
import { FeedbackList } from './Statistics.styled';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <Request>{title}:</Request>
    <FeedbackList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </FeedbackList>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
