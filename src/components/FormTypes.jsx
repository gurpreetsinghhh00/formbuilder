const FormTypes = () => {
  const inputTypes = [
    "Text",
    "Password",
    "Email",
    "Tel",
    "File",
    "Date",
    "Url",
    "Number",
  ];

  return (
    <>
      {inputTypes.map((type, index) => {
        return (
          <div
            className="border-4 border-black rounded-lg h-24 flex justify-center items-center font-bold text-2xl"
            key={type}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("inputType", type.toLowerCase());
            }}
          >
            {type}
          </div>
        );
      })}
    </>
  );
};

export default FormTypes;
