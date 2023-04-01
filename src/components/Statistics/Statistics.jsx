import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total }) => {
  const countPositiveFeedbackPercentage = () => {
    let count = Math.round((good / total) * 100);
    return !count ? 0 : count;
  };

  return (
    <div className={css.stats}>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p
        className={
          countPositiveFeedbackPercentage > 50 ? css.positive : css.negative
        }
      >
        Positive feedback: {countPositiveFeedbackPercentage()}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
};
