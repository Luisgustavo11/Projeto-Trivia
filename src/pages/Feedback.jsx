import React from 'react';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h2
          data-testid="feedback-text"
        >
          Feedback

        </h2>
      </>
    );
  }
}

export default Feedback;
