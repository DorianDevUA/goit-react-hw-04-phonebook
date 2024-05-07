import { Component } from 'react';
import { Container } from './App.styled';
import { Description } from '../Description';
import { Options } from '../Options';
import { Feedback } from '../Feedback';

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, totalFeedback) => {
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    console.log(this.state);
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      totalFeedback,
    );

    return (
      <Container>
        <Description />
        <Options options={options} onLeaveFeedback={this.updateFeedback} />
        {totalFeedback ? (
          <Feedback
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          'No feedback yet'
        )}
      </Container>
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
