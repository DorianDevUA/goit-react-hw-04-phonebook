import { Component } from 'react';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from '../Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = feedbackType => {
    console.log(feedbackType);
    this.setState({ [feedbackType]: this.state[feedbackType] + 1 });
  };

  resetFeedback = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, totalFeedback) => {
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      totalFeedback,
    );

    return (
      <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          totalFeedback={totalFeedback}
          onLeaveFeedback={this.updateFeedback}
          onResetFeedback={this.resetFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
      </>
    );
  }
}

//! |Комбінації клавіш VSCode
// |-----------------------------------
// |Ctrl + P
// |Пошук файлів у проєкті
// |-----------------------------------
// |Ctrl + B
// |Відкриття/Закриття Primary Side Bar (Explorer | Файл менеджер)
// |-----------------------------------
// |Ctrl + `
// |Відкриття/Закриття Terminal
// |-----------------------------------
