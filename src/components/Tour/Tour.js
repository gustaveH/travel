import React from 'react';

class Tour extends React.Component {
  render() {
    return (
      <article className='tour'>
        <div className='image-container'>
          <img
            width='200'
            src='https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
          />
        </div>
      </article>
    );
  }
}
export default Tour;
