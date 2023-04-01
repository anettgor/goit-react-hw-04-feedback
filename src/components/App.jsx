import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const countTotalFeedback = () => {
    setTotal(total + 1);
  };

  const onFeedback = event => {
    const data = event.target.dataset.opinion;
    if (data === 'good') {
      setGood(good + 1);
    } else if (data === 'bad') {
      setBad(bad + 1);
    } else if (data === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      console.warn('something went wrong with onFeedback function');
    }
    countTotalFeedback();
  };

  return (
    <div className={css.body}>
      <Section title="Please leave feedback">
        <div>
          <FeedbackOptions text="good" onFeedback={onFeedback} />
          <FeedbackOptions text="neutral" onFeedback={onFeedback} />
          <FeedbackOptions text="bad" onFeedback={onFeedback} />
        </div>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        )}
      </Section>
    </div>
  );
};

App.propTypes = {
  positive: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
};
