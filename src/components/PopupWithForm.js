import React from 'react';

function PopupWithForm ({title, name, buttonText, isOpen, onClose, children }) {
    
    return(
      <section  className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button className="button popup__button-close" type="button" onClick={onClose}></button>
          <form className="popup__form" name={name} novalidate>          
            <h2 className="popup__edit-profile">{title}</h2>
            <fieldset className="popup__form-set">
            {children}
            <button className="popup__button-save button" type="submit">{buttonText}</button>
            </fieldset>
          </form>
        </div>
      </section >
    )
}

export default PopupWithForm;