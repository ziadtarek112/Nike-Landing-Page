const Button = ({ label, iconUrl }) => {
  return (
    <>
      <button className="flex justify-center 
      items-center text-white
       bg-coral-red rounded-full 
       gap-2 leading-none text-lg font-montserrat px-7 py-4">
        {label}
        <img className="ml-2 rounded-full w-5 h-5" src={iconUrl} alt="" />
      </button>
    </>
  );
};

export default Button;
