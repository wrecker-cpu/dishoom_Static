// Modal.tsx
'use client'

import React from 'react';
import ReactDOM from 'react-dom';

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-[#f1ece0] bg-opacity-20 z-50 flex items-center justify-center'>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
