import { useAppSelector } from '../../app/hooks';
import { CountCellsAlive, Time } from '../../features/algo/gameOfLife';

export const Timer = () => {
  const timer = useAppSelector(Time);
  const cells = useAppSelector(CountCellsAlive);

  return (
    <div className="block w-fit mx-auto mb-2">
      <p className="bg-slate-100 p-4 flex justify-center items-center">
        Tour joué : {timer} <br />
        Cellules vivante : {cells} <br />
      </p>
    </div>
  );
};
