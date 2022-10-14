import React, { Component } from 'react';
import { Box } from './Box';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    const buttonText = evt.currentTarget.textContent.toLowerCase();
    const stateKeys = Object.keys(this.state);

    for (const stateKey of stateKeys) {
      if (buttonText === stateKey) {
        this.setState(prevState => ({
          [stateKey]: prevState[stateKey] + 1,
        }));
      }
    }
  };

  countTotalFeedback = () => {
    const stateArray = Object.values(this.state);
    const total = stateArray.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = (total, options) => {
    let positiveFeedbackPercentage = 0;
    if (Number(options.good) > 0) {
      positiveFeedbackPercentage = (
        (Number(options.good) / total) *
        100
      ).toFixed(2);
    }

    return positiveFeedbackPercentage;
  };

  render() {
    const options = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      options
    );

    return (
      <Box
        maxWidth={500}
        border="solid"
        borderColor="black"
        borderRadius={12}
        mt={2}
        ml={2}
        pl={4}
        pt={2}
        pb={2}
      >
        <h2>Feedback Form</h2>

        <FeedbackOptions
          onHandleFeedback={this.handleFeedback}
          title="Please leave feedback:"
        />

        {total > 0 ? (
          <Statistics
            title="Statistics"
            good={options.good}
            bad={options.bad}
            neutral={options.neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Box>
    );
  }
}
