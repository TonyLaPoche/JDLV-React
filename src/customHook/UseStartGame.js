import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

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
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default UseStartGame;
