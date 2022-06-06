import { useEffect, useState } from 'react';
import Card from './Card.js';
import {api} from '../utils/api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getInitialUser()])
          .then(([cards, data]) => {
              setUserName(data.name)
              setUserDescription(data.about);
              setUserAvatar(data.avatar);
              setCards(cards)
          })
          .catch(err => console.log(err))
  }, [])

    return (
      <main className="content">
      {/* Профиль  */}
     <section className="profile">
         <div className="profile__avatar-container">
             <button type="button" className="button profile__avatar-button"  onClick={onEditAvatar}></button>
             <img id="profileAvatar" src={userAvatar} alt="аватар профиля" className="profile__avatar" />
         </div>
         <div className="profile__info">
             <h1 id="profileName" className="profile__name">{userName}</h1>
             <p  id= "profileAbout" className="profile__description">{userDescription}</p>
             <button type="button" className="button profile__edit-button" onClick={onEditProfile}></button>
         </div>           
         <button type="button" className="button profile__add-button" onClick={onAddPlace}></button>
     </section>
      {/* Элементы  */}
     <section className="photo-grid">
     {cards.map(card => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
     </section>
 </main>
    );    
}

export default Main;