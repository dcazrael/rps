import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../src/images/icon-close.svg';

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalWrapperRef = useRef();

  const backDropHandler = (e) => {
    if (e.target.dataset.type === 'modal-button') return;
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);

    window.addEventListener('click', backDropHandler);
    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className='absolute inset-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50'>
      <div className='w-5/6 min-h-0 md:w-3/4' ref={modalWrapperRef}>
        <div className='w-full h-full p-6 bg-white rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            {title && (
              <h2 className='text-4xl font-bold uppercase font-barlow text-neutral-dark'>
                {title}
              </h2>
            )}
            <a href='#' onClick={handleCloseClick}>
              <CloseIcon className='w-6 h-6' />
            </a>
          </div>
          <div className='flex w-full my-12'>{children}</div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.querySelector('#modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
