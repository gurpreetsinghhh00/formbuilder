import React, { useContext } from "react";
import Button from "./Button";
import FormContext from "../utils/FormContext";

const Input = ({ placeholder, title, type, id }) => {
  const { formInputs, setFormInputs } = useContext(FormContext);
  return (
    <div className="mb-4 font-varela grid grid-cols-12 gap-4">
      <div className="col-span-10">
        <label className="block text-gray-700 text-md font-semibold mb-2">
          {title || "Title"}
        </label>
        {type == "tel" ? (
          <input
            className="font-thin text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={type || "text"}
            placeholder={placeholder || "Enter a value"}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        ) : (
          <input
            className="font-thin text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={type || "text"}
            placeholder={placeholder || "Enter a value"}
          />
        )}
      </div>
      <div className="col-span-2 place-self-end">
        <Button
          name={"Delete"}
          onClick={(e) => {
            let temp = formInputs.filter((obj) => {
              if (obj.id == id) return false;
              return true;
            });
            setFormInputs(temp);
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Input;
