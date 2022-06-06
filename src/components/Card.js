function Card({card, onCardClick}) {
  
  const handleCardClick = () => {
      onCardClick(card)
  }
  return (
    <div className="card">
      <button type="button" className="button card__delete"></button>
      <img className="card__image" alt={`${card.name}`} src={`${card.link}`} onClick={handleCardClick} />
      <h2 className="card__title">{`${card.name}`}</h2>
      <div className="card__like-container">
        <button type="button" className="button card__like"></button>
         <p className="card__like-number">{`${card.likes.length}`}</p>
      </div>
    </div>
  )
}
export default Card;