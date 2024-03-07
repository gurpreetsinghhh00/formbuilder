const Button = ({ type, name, onClick }) => (
  <div className="flex justify-center">
    <button
      type={type || "submit"}
      className="bg-black text-white p-2 rounded-md text-sm"
      onClick={onClick}
    >
      {name}
    </button>
  </div>
);

export default Button;
