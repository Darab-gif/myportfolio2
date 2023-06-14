type Props = {
  children: JSX.Element | JSX.Element[];
};
const Container = ({ children }: Props) => {
  return (
    <div className="bg-eerie-black-1 lg:h-[57rem] h-[64rem] md:h-[58rem]  lg:w-[56rem] w-[90%] md:w-[40rem] rounded-[20px] lg:ml-[5rem] lg:mt-24 mt-1 lg:mb-[3rem] mb-[8rem] border-[1px] border-jet relative overflow-y-auto lg:overflow-y-hidden overflow-x-hidden scrollbar">
      {children}
    </div>
  );
};

export default Container;
