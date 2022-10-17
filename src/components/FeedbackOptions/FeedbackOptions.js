import PropTypes from 'prop-types';
import { ButtonsContainer, Button, Request } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onHandleFeedback, title, options }) => (
  <div>
    <Request>{title}</Request>
    <ButtonsContainer>
      {options.map((option, index) => (
        <Button key={index} type="button" onClick={onHandleFeedback}>
          {option[0].toUpperCase() + option.substring(1)}
        </Button>
      ))}
    </ButtonsContainer>
  </div>
);

FeedbackOptions.propTypes = {
  onHandleFeedback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
