

export const MenuButton = ({ children }) => {
  return (
    <div className=" group relative cursor-pointer overflow-hidden leading-6 ">
      <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]    font-sans font-medium text-white py-3 px-4">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-sans font-medium text-white text-center py-3 px-4">
        {children}
      </span>
    </div>
  );
};