import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35">
      <div className="bg-white rounded-xl shadow-lg relative min-w-[300px] max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
