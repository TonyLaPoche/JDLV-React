// == Import

import { useEffect } from 'react';

// == Composant
function Timer() {
  let count = 1;
  useEffect(() => {
    const intervalID = setInterval(() => {
      count += 1;
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <h1>timer : {count}</h1>
  );
}

// == Export
export default Timer;
