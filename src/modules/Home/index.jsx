import React from 'react';
import Footer from '../../common/Footer/Footer';
import homeLogo from '../../assets/works-2.gif';
import { home_cards } from '../../store/Home/data';
import './Home.scss';

function Home() {
  return (
    <div className='Home'>
      <div className='Section1'>
        <img src={homeLogo} alt="homegif" height="400px" className='Logo' />
        <div className='Box'>
          <div className='Title'>
            Welcome to Woodworks!
          </div>
          <div className='Text'>
            A marketplace to meet all your wood requirement, in a powerful and efficient way.
          </div>
        </div>
      </div>

      <div className='Section2'>
        {home_cards.map((card, index) => (
          <div className='Card' key={index}>
            <div className='Heading'>
              <img src={card.icon} height="30px" alt="icon" />
              {card.heading}
            </div>
            <div className='Content'>{card.text}</div>
          </div>
        ))}
      </div>

      <div className='Section3'>
        <div className='Title'>Coming Soon!</div>
        <div className='Text'>Stay Tuned</div>
      </div>

      <Footer />
    </div>
  )
}

export default Home