import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ text, onFeedback }) => {
  return (
    <>
      <button
        className={css.btn}
        type="button"
        data-opinion={text}
        onClick={onFeedback}
      >
        {text}
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  text: PropTypes.string,
  onFeedback: PropTypes.func,
};
