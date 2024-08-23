const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-slate-50 hover:text-[#595959] hover:border-[#595959]`
          : "bg-coral-red  text-white border-coral-red hover:bg-coral-orange hover:border-coral-orange"
      } ${fullWidth && "w-full"} `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
