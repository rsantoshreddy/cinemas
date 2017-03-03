import React from 'react';
import Seat from "./Seat";

const renderSeats = (seats, handleSeatSelection) => {
  if (seats) {
    return seats.map((properties, idx) => {
      return (
          <Seat key={idx} {...properties} handleSeatSelection={handleSeatSelection}/>
      );
    });
  }
  return null;
};


const Seats = (props) => {
  const {seats, handleSeatSelection} = props;
  return (
	    <ul>
	       {renderSeats(seats, handleSeatSelection)}
	    </ul>
    
  );
};

export default Seats;