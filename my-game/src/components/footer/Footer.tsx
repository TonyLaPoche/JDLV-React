import { Control } from '../controle/Controle';
export const Footer = () => {
  return (
    <>
      <div className="bg-slate-200 border-t-2 border-slate-300 w-screen h-44">
        <div className="h-full p-4 flex flex-col justify-center gap-8 ">
          <Control />
        </div>
      </div>
    </>
  );
};
