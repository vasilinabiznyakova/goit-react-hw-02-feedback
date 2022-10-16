import PropTypes from 'prop-types';
import { ButtonsContainer, Button, Request } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onHandleFeedback, title }) => (
  <div>
    <Request>{title}</Request>
    <ButtonsContainer>
      <Button type="Button" onClick={onHandleFeedback}>
        Good
      </Button>
      <Button type="button" onClick={onHandleFeedback}>
        Neutral
      </Button>
      <Button type="button" onClick={onHandleFeedback}>
        Bad
      </Button>
    </ButtonsContainer>
  </div>
);

FeedbackOptions.propTypes = {
  onHandleFeedback: PropTypes.func.isRequired,
};
