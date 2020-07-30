import React from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';

class TourList extends React.Component {
  render() {
    return (
      <section className='tourlist'>
        <Tour />
      </section>
    );
  }
}
export default TourList;
