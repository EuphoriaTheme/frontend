import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 glass flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // Ensure this matches the ID in your HTML
  );
}