import React, { useContext, useEffect } from "react";
import FormContext from "../utils/FormContext";
import FinalFormInput from "../components/FinalFormInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ViewForm = () => {
  const navigate = useNavigate();
  const { formInputs, _ } = useContext(FormContext);
  useEffect(() => {
    if (formInputs.length == 0) {
      navigate("/");
    }
  }, [formInputs]);

  return (
    <div className="w-full font-varela">
      <div className="text-center mt-4 font-bold text-xl">
        Final Form Preview
      </div>
      <div className="w-full flex flex-row justify-center">
        <form className="bg-white shadow-lg rounded-lg px-8 pt-8 pb-8 mb-4 mt-10 w-1/2">
          {formInputs.map((obj) => {
            return <FinalFormInput {...obj} key={obj.id} />;
          })}
          <Button name={"Submit"} type={"button"} />
        </form>
      </div>
    </div>
  );
};

export default ViewForm;
