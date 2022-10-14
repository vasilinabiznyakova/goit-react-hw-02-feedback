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

    {/* {total > 0 ? (
      <FeedbackList>
        <li>Good: {this.state.good}</li>
        <li>Neutral: {this.state.neutral}</li>
        <li>Bad: {this.state.bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback: {this.countPositiveFeedbackPercentage(total)}%
        </li>
      </FeedbackList>
    ) : (
      <p>There is no feedback.</p>
    )} */}
  </div>
);
