import React from 'react'
import ReactDOM from 'react-dom';
import { ImSpinner2 } from 'react-icons/im';

const portalElement = document.getElementById('overlays') as HTMLElement;

const Loader = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 z-50">
          <ImSpinner2 className='animate-spin text-primary' size={32} />
        </div>,
        portalElement
      )}
    </React.Fragment>
  )
}

export default Loader