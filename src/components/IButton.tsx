function IButton({
  className = "",
  children = "",
  title,
  type,
  onclick,
}: {
  className?:string;
  children?: any;
  title: any;
  type?: any;
  onclick?: any;
}) {
  return (
    <button
      className={`w-full md:w-fit flex justify-center items-center px-2 py-1 border border-transparent text-xs md:text-sm transition-all duration-300 rounded-md shadow-sm text-center text-white   hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2  ${className} `}
      type={type}
      onClick={onclick}
    >
      {children}
      {title}
    </button>
  );
}

export default IButton;
