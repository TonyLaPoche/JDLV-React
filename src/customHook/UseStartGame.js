import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { RunGame } from '../mecanique';

const UseStartGame = (callback, delay) => {
  const savedCallback = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      dispatch(savedCallback.current());
    };
    if (delay !== 0) {
      console.log('tick = ', tick);
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default UseStartGame;
