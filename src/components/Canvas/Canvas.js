import React from 'react';
import Sky from '../Sky/Sky';
import Ground from '../Ground/Ground';

const Canvas = () => {
  // const style = {
  //   border: '1px solid black',
  // };

  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
      // style={style}
    >
      <Sky />
      <Ground />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export default Canvas;