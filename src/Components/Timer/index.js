import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeLimit } from '../../store/Slices/Timer';
import Counter from '../Counter';

export const Timer = ({ id }) => {
  const { timeLimit } = useSelector((state) => state.timer);
  const { dateNow } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    const limit =
      dateNow + Math.floor(Math.random() * (150000 - 30000)) + 30000;
    dispatch(setTimeLimit({ id, limit }));
  }, []);

  return (
    <div>
      {timeLimit.length && (
        <Counter diff={timeLimit.find((e) => e.id === id).limit - dateNow} />
      )}
    </div>
  );
};
Timer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Timer;
