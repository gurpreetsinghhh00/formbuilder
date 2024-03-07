import React, { useContext, useState } from "react";
import FormTypes from "../components/FormTypes";
import Modal from "../components/Modal";
import ModalContext from "../utils/ModalContext";
import FormContext from "../utils/FormContext";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CreateForm = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const [type, setType] = useState(null);
  const { formInputs, _ } = useContext(FormContext);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    setType(e.dataTransfer.getData("inputType"));
    setShowModal(true);
  };

  return (
    <div className="flex flex-row min-w-screen min-h-screen min-w-full font-varela">
      <div className="w-2/3 p-8 flex flex-col items-center font-bold text-2xl">
        <div>Drag and Drop Components Here</div>
        <div
          className="m-4 p-12 bg-slate-100 rounded shadow-md min-h-96 w-4/5"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {formInputs.map((obj) => {
            return <Input {...obj} key={obj.id} />;
          })}
        </div>
        {formInputs.length != 0 ? (
          <div>
            <Link to={"/viewform"}>
              <Button name={"Generate Form"} />
            </Link>
          </div>
        ) : null}
      </div>
      <div className="w-1/3 bg-slate-300 p-8 grid grid-cols-2 gap-4 grid-flow-row content-start">
        <FormTypes />
      </div>
      {showModal ? <Modal inputType={type} /> : <></>}
    </div>
  );
};

export default CreateForm;
