import Button from "./Button";
import ModalContext from "../utils/ModalContext";
import { useContext, useRef } from "react";
import FormContext from "../utils/FormContext";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ inputType }) => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { formInputs, setFormInputs } = useContext(FormContext);
  const titleRef = useRef(null);
  const placeholderRef = useRef(null);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="gap-5 flex flex-col ">
        <button
          className="place-self-end text-xl text-white"
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </button>
        <div className="w-full min-w-[500px]">
          <form
            className="bg-white rounded-xl px-10 py-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4 font-varela">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={"text"}
                placeholder={"Enter a value"}
                ref={titleRef}
              />
            </div>
            {inputType !== "file" && inputType !== "date" ? (
              <div className="mb-4 font-varela">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Placeholder
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type={"text"}
                  placeholder={"Enter a value"}
                  ref={placeholderRef}
                />
              </div>
            ) : (
              <></>
            )}
            <Button
              name={"Submit"}
              onClick={(e) => {
                e.preventDefault();
                setFormInputs([
                  ...formInputs,
                  {
                    id: uuidv4(),
                    type: inputType,
                    title: titleRef.current.value,
                    placeholder: placeholderRef?.current?.value,
                  },
                ]);
                console.log(formInputs);
                setShowModal(false);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
