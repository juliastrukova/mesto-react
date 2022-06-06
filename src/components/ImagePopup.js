import React from 'react';

function ImagePopup ({card, onClose}) {
    return(
      <section className={`popup popup_image ${card ? 'popup_opened' : ''}`}>
         <div className="popup__container-image">
        <figure className="popup__image-form">
          <img className="popup__image-url" src={card ? card.link : ''} alt={card ? card.name : ''} />
          <figcaption className="popup__image-name">{card ? card.name : ''}</figcaption>
          <button type="button" className="button popup__button-close" onClick={onClose}></button>
        </figure>
        </div>
      </section>
    )
}

export default ImagePopup;