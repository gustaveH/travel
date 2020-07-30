import React from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

class TourList extends React.Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    // filter loops through array and applies to each item inarray
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };

  render() {
    //makes it easier to access the tours array using jsx
    const { tours } = this.state;
    return (
      <section className='tourlist'>
        {/* Looped through the tourData array and use map and use callback function */}

        {tours.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
export default TourList;
