const Button = ({ text, aditionalClass }) => {
  return (
    <button
      className={`px-6 py-2 text-white bg-grn rounded-full ${
        aditionalClass === "" ? "hover:bg-grn/85" : aditionalClass
      }`}
    >
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
