import React from 'react'
import Mains from './styledMain'
import cardsImg from '../../assets/imgs/cards.png'

const Main = () => {
    const posts = [
        {time: 2, img: cardsImg, subtitle: 'Lorem ipsum dolor sit amet...', content: 'Lorem ipsum dolor sit amet ipsum dolor sit amet'},
        {time: 2, img: cardsImg, subtitle: 'Lorem ipsum dolor sit amet...', content: 'Lorem ipsum dolor sit amet ipsum dolor sit amet'},
        {time: 2, img: cardsImg, subtitle: 'Lorem ipsum dolor sit amet...', content: 'Lorem ipsum dolor sit amet ipsum dolor sit amet'},
        {time: 2, img: cardsImg, subtitle: 'Lorem ipsum dolor sit amet...', content: 'Lorem ipsum dolor sit amet ipsum dolor sit amet'},
        {time: 2, img: cardsImg, subtitle: 'Lorem ipsum dolor sit amet...', content: 'Lorem ipsum dolor sit amet ipsum dolor sit amet'},
        {time: 2, img: cardsImg, subtitle: 'Lorem ipsum dolor sit amet...', content: 'Lorem ipsum dolor sit amet ipsum dolor sit amet'},
    ]
  return (
    <Mains>
      <section className='container-info-user'>
        <p>Olá <span>Usuário</span></p>
      </section>

      <section className='gallery-cards'>
        {
            posts.map((card, index) => {
                return (
                    <div key={index} className='card'>

                    <div className='card__img'>
                        <div className='info-time-post'>
                            <i className="fa-regular fa-calendar"></i>
                            <span>{card.time}min atrás</span>
                        </div>
                        <img src={card.img} alt="people at beach" />
                        </div>
            
                        <div className='content-info'>
                            <h2>{card.subtitle}</h2>
                            <p>{card.content}</p>
                        </div>
                    </div>
                )
            },)
        }
   

      </section>
    </Mains>
  )
}

export default Main
