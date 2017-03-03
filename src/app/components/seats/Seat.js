import React from 'react';

const Seat = (props) => {
  const {status, id} = props;
  return (
	<li className={"seat " + status } onClick={ () => props.handleSeatSelection(id)}></li> 
  );
};

export default Seat;