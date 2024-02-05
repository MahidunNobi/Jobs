const ButtonBordered = ({ text, aditionalClass }) => {
  return (
    <button
      className={`px-6 py-2 text-grn border-2 border-grn font-medium hover:bg-grn/5 rounded-full ${aditionalClass}`}
    >
      {text}
    </button>
  );
};

export default ButtonBordered;
