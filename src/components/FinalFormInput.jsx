const FinalFormInput = ({ placeholder, title, type, id }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-lg font-bold mb-2"
        htmlFor={id}
      >
        {title || "Title"}
      </label>
      {type == "tel" ? (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type={type}
          placeholder={placeholder || "Enter a value"}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type={type}
          placeholder={placeholder || "Enter a value"}
        />
      )}
    </div>
  );
};

export default FinalFormInput;
