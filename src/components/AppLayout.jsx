import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ModalContext from "../utils/ModalContext";
import FormContext from "../utils/FormContext";

const AppLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState([]);
  return (
    <div>
      <FormContext.Provider
        value={{
          formInputs,
          setFormInputs,
        }}
      >
        <ModalContext.Provider
          value={{
            showModal,
            setShowModal,
          }}
        >
          <Navbar />
          <Outlet />
        </ModalContext.Provider>
      </FormContext.Provider>
    </div>
  );
};

export default AppLayout;
