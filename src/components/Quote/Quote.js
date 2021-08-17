import React from 'react';

const Quote = () => {
  const quoteContainerStyles = {
    width: '80%',
    maxWidth: '900px',
    fontSize: ' 3rem',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'rgb(32, 41, 68)',
    color: 'rgb(255, 255, 255)',
  };

  return (
    <div style={quoteContainerStyles}>
      <p>
        Mathematics is not about numbers, equations, computations or algorithms:
        it is about understanding. -William Paul Thurston
      </p>
    </div>
  );
};

export default Quote;
