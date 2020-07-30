import React from 'react';
import './Tour.scss';
import { FaWindowClose, FaCaretSquareDown } from 'react-icons/fa';

class Tour extends React.Component {
  render() {
    return (
      <article className='tour'>
        <div className='image-container'>
          <img
            src='https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
          />
          <span className='close-btn'>
            <i>
              <FaWindowClose className='window-close' />
            </i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>City</h3>
          <h3>Name</h3>
          <h5>
            info{' '}
            <span>
              <FaCaretSquareDown />
            </span>
          </h5>
          <p>
            Cupidatat nostrud sint exercitation anim in. Sit reprehenderit
            exercitation do Lorem consectetur cillum elit cillum labore minim.
          </p>
        </div>
      </article>
    );
  }
}
export default Tour;
