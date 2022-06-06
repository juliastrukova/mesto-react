import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  return (
    <div  className="page">
      <Header/>
      <Main
       onEditProfile={handleEditProfileClick}
       onAddPlace={handleAddPlaceClick}
       onEditAvatar={handleEditAvatarClick}
       onCardClick={handleCardClick}/>
      <Footer/>
        <PopupWithForm
            title="Редактировать профиль"
            name="user"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}>
            <label className="popup__field">
                <input id="name" type="text" name="name" minlength="2" maxlength="40" value required placeholder="Ваше имя" className="popup__edit-info" />
                <span id="nameError" className="popup__error popup__error_visible"></span>
            </label>
            <label className="popup__field">
                <input id="about" type="text" name="about" minlength="2" maxlength="200" value required  placeholder="Ваш род деятельности" className="popup__edit-info" />
                <span id="aboutError" className="popup__error popup__error_visible"></span>
            </label>
        </PopupWithForm>
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}>
            <label className="popup__field">
                <input name="avatarUrl" type="url" id="avatarUrl" value required placeholder="Ссылка на картинку" className="popup__edit-info" />
                <span id="avatarUrlError" className="popup__error popup__error_visible"></span>
            </label>
        </PopupWithForm>
        <PopupWithForm
            title="Новое место"
            name="card"
            buttonText="Сохранить"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
            <label className="popup__field">
                <input id="cardName" name="cardName" type="text" minlength="2" maxlength="30" value required placeholder="Название" className="popup__edit-info" />
                <span id="cardNameError" className="popup__error popup__error_visible"></span>
            </label>
            <label className="popup__field">
                <input id="cardUrl" name="cardUrl" type="url" value required  placeholder="Ссылка на картинку" className="popup__edit-info" />
                <span id="cardUrlError" className="popup__error popup__error_visible"></span>
            </label>
        </PopupWithForm>
      <section id="popupDelete" className="popup popup_delete">
          <div className="popup__container">
              <button type="button" className="button popup__button-close"></button>
              <form className="popup__form" name="popup_delete">
                  <h2 className="popup__edit-profile">Вы уверены?</h2>
                  <button  className="popup__button-save button" type="submit">Да</button>
              </form>
          </div>    
        </section>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}

export default App;
