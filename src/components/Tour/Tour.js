import React from 'react';
import './Tour.scss';
import { FaWindowClose, FaCaretSquareDown } from 'react-icons/fa';

class Tour extends React.Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { city, img, name, info } = this.props.tour;
    return (
      <article className='tour'>
        <div className='image-container'>
          <img src={img} alt='' />
          <span className='close-btn'>
            <i>
              <FaWindowClose className='window-close' />
            </i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{' '}
            <span onClick={this.handleInfo}>
              <FaCaretSquareDown />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
export default Tour;
