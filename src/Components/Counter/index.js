import PropTypes from 'prop-types';
const Counter = ({ diff }) => {
  const H = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const M = Math.floor((diff / 1000 / 60) % 60);
  const S = Math.floor((diff / 1000) % 60);
  const timeDiffString = `${H > 9 ? H : `0${H}`}:${M > 9 ? M : `0${M}`}:${
    S > 9 ? S : `0${S}`
  }`;
  return <p>{diff >= 0 ? timeDiffString : `Time Out!!!`}</p>;
};

export default Counter;
Counter.propTypes = {
  diff: PropTypes.number.isRequired,
};
